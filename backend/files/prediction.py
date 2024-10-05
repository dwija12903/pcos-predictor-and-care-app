import joblib
import pandas as pd
import os, sys, json
import warnings

warnings.filterwarnings("ignore", category=UserWarning)
model_path = os.path.join(os.path.dirname(__file__), 'pcos_model.pkl')
model = joblib.load(model_path)

feature_names = [' Age (yrs)', 'Weight (Kg)', 'Height(Cm) ', 'BMI', 'Pulse rate(bpm) ', 'RR (breaths/min)', 'Hb(g/dl)', 'Cycle(R/I)', 'Cycle length(days)', 'Marraige Status (Yrs)', 'Pregnant(Y/N)',
       'No. of aborptions', '  I   beta-HCG(mIU/mL)','II    beta-HCG(mIU/mL)', 'FSH(mIU/mL)', 'LH(mIU/mL)', 'FSH/LH','Hip(inch)', 'Waist(inch)', 'Waist:Hip Ratio', 'TSH (mIU/L)',
       'AMH(ng/mL)', 'PRL(ng/mL)', 'Vit D3 (ng/mL)', 'PRG(ng/mL)','RBS(mg/dl)', 'Weight gain(Y/N)', 'hair growth(Y/N)','Skin darkening (Y/N)', 'Hair loss(Y/N)', 'Pimples(Y/N)',
       'Fast food (Y/N)', 'Reg.Exercise(Y/N)', 'BP _Systolic (mmHg)','BP _Diastolic (mmHg)', 'Follicle No. (L)', 'Follicle No. (R)','Avg. F size (L) (mm)', 'Avg. F size (R) (mm)', 'Endometrium (mm)']

data = json.loads(sys.argv[1]) 
input_features = [
        int(data['age']),
        float(data['weight']),
        float(data['height']),
        float(data['bmi']),
        float(data['pulseRate']),
        float(data['rr']),
        float(data['hb']),
        float(data['cycle']),
        float(data['cycleLength']),
        float(data['marriageStatus']),
        int(data['pregnant']),
        float(data['noOfAbortions']),
        float(data['betaHcgI']),
        float(data['betaHcgII']),
        float(data['fsh']),
        float(data['lh']),
        float(data['fshLh']),
        float(data['hip']),
        float(data['waist']),
        float(data['waistHipRatio']),
        float(data['tsh']),
        float(data['amh']),
        float(data['prl']),
        float(data['vitD3']),
        float(data['prg']),
        float(data['rbs']),
        int(data['weightGain']),
        int(data['hairGrowth']),
        int(data['skinDarkening']),
        int(data['hairLoss']),
        int(data['pimples']),
        int(data['fastFood']),
        int(data['regExercise']),
        float(data['bpSystolic']),
        float(data['bpDiastolic']),
        float(data['follicleNoL']),
        float(data['follicleNoR']),
        float(data['avgFSizeL']),
        float(data['avgFSizeR']),
        float(data['endometrium'])
    ]

input_df = pd.DataFrame([input_features], columns=feature_names)
prediction = model.predict(input_df)[0]
print(prediction)