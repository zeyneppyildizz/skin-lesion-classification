from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
from PIL import Image
import io
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CLASS_NAMES = [
    'Acne and Rosacea', 'Actinic Keratosis', 'Atopic Dermatitis', 'Bullous Disease',
    'Cellulitis Impetigo', 'Eczema', 'Exanthems Drug Eruptions', 'Hair Loss',
    'Herpes HPV', 'Light Diseases', 'Lupus', 'Melanoma Skin Cancer',
    'Nail Fungus', 'Poison Ivy', 'Psoriasis Lichen Planus', 'Scabies Lyme',
    'Seborrheic Keratoses', 'Systemic Disease', 'Tinea Ringworm', 'Urticaria Hives',
    'Vascular Tumors', 'Vasculitis', 'Warts Molluscum'
]

MODEL_PATH = "EffNetB4_Fold0_380px_best.keras"
IMG_SIZE = 380

print("Model yükleniyor. Lütfen bekleyin...")

if os.path.exists(MODEL_PATH):
    model = tf.keras.models.load_model(MODEL_PATH)
    print("Model Başarıyla Yüklendi! (TTA Modu Aktif)")
else:
    print(f"HATA: Model dosyası bulunamadı! Lütfen '{MODEL_PATH}' dosyasını backend klasörüne atın.")
    model = None

def prepare_tta_batch(image_bytes):
    """
    Gelen resmi okur ve 4 farklı varyasyonunu (Orijinal, Ters, Döndürülmüş, Kırpılmış)
    oluşturarak modele toplu halde (Batch) sunar.
    """
    
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    img = img.resize((IMG_SIZE, IMG_SIZE)) 
    img_array = tf.keras.preprocessing.image.img_to_array(img)   
    img_tensor = tf.convert_to_tensor(img_array, dtype=tf.float32)
    
    images = []

    images.append(img_tensor)

    images.append(tf.image.flip_left_right(img_tensor))

    images.append(tf.image.rot90(img_tensor, k=1))

    img_crop = tf.image.central_crop(img_tensor, central_fraction=0.9)
    img_crop = tf.image.resize(img_crop, (IMG_SIZE, IMG_SIZE))
    images.append(img_crop)

    batch = tf.stack(images)
    
    batch = tf.keras.applications.efficientnet.preprocess_input(batch)
    
    return batch

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    if model is None:
        return {"error": "Model yüklenemediği için işlem yapılamıyor."}
        
    image_bytes = await file.read()
    
    try:
        input_batch = prepare_tta_batch(image_bytes)
        

        predictions_batch = model.predict(input_batch, verbose=0)
        
        avg_predictions = np.mean(predictions_batch, axis=0)
        
        top_3_indices = avg_predictions.argsort()[-3:][::-1]
        
        results = []
        for idx in top_3_indices:
            confidence = float(avg_predictions[idx] * 100)
            disease_name = CLASS_NAMES[idx]
            
            if confidence > 70: color = "#e74c3c"      
            elif confidence > 40: color = "#f39c12"    
            else: color = "#f1c40f"                    
            
            results.append({
                "disease": disease_name,
                "score": round(confidence, 2),
                "color": color
            })
            
        return {"predictions": results}

    except Exception as e:
        return {"error": f"Analiz sırasında hata oluştu: {str(e)}"}