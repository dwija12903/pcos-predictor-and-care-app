import React, { useState, useEffect, useCallback} from 'react';
import img from '../img/img.jpg';
import { AuthContext } from './LogIn/AuthContext';
import { useContext } from 'react';

const Prediction = () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const { userName } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        age: '',
        weight: '',
        height: '',
        bmi: '',
        pulseRate: '',
        rr: '',
        hb: '',
        cycle: '1',
        cycleLength: '',
        marriageStatus: '',
        pregnant: '1',
        noOfAbortions: '',
        betaHcgI: '',
        betaHcgII: '',
        fsh: '',
        lh: '',
        fshLh: '',
        hip: '',
        waist: '',
        waistHipRatio: '',
        tsh: '',
        amh: '',
        prl: '',
        vitD3: '',
        prg: '',
        rbs: '',
        weightGain: '1',
        hairGrowth: '1',
        skinDarkening: '1',
        hairLoss: '1',
        pimples: '1',
        fastFood: '1',
        regExercise: '1',
        bpSystolic: '',
        bpDiastolic: '',
        follicleNoL: '',
        follicleNoR: '',
        avgFSizeL: '',
        avgFSizeR: '',
        endometrium: ''
    });
    const [result, setResult] = useState(null);
    const [showResult, setShowResult] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const calculateBMI = useCallback(() => {
        const weight = parseFloat(formData.weight);
        const height = parseFloat(formData.height);
        if (weight > 0 && height > 0) {
            const heightInMeters = height / 100;
            const bmi = weight / (heightInMeters * heightInMeters);
            setFormData(prevData => ({ ...prevData, bmi: bmi.toFixed(2) }));
        } else {
            setFormData(prevData => ({ ...prevData, bmi: '' }));
        }
    }, [formData.weight, formData.height]);

    const calculateWHR = useCallback(() => {
        const waist = parseFloat(formData.waist);
        const hip = parseFloat(formData.hip);
        if (waist > 0 && hip > 0) {
            const whr = waist / hip;
            setFormData(prevData => ({ ...prevData, waistHipRatio: whr.toFixed(2) }));
        } else {
            setFormData(prevData => ({ ...prevData, waistHipRatio: '' }));
        }
    }, [formData.waist, formData.hip]);

    const calculateFSHtoLHRatio = useCallback(() => {
        const fsh = parseFloat(formData.fsh);
        const lh = parseFloat(formData.lh);
        if (fsh > 0 && lh > 0) {
            const fshLHRatio = fsh / lh;
            setFormData(prevData => ({ ...prevData, fshLh: fshLHRatio.toFixed(2) }));
        } else {
            setFormData(prevData => ({ ...prevData, fshLh: '' }));
        }
    }, [formData.fsh, formData.lh]);

    // Only run these calculations when the relevant fields change
    useEffect(() => {
        calculateBMI();
        calculateWHR();
        calculateFSHtoLHRatio();
    }, [calculateBMI, calculateWHR, calculateFSHtoLHRatio]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${backendUrl}/predict`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),            // Send the form data
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Prediction result:', data);
                setShowResult(true);
                setResult(data.outputValues);
            } else {
                console.error('Error:', data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <main
            className='p-5 min-h-screen bg-cover bg-center relative'
            style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-10">                
                <div className='flex justify-center'>
                <div className='w-full max-w-4xl bg-white rounded-lg shadow-md p-6'>
                    {showResult ? (
                        <>
                            <h2 className="text-2xl font-bold text-[#c84772] text-center mb-4">Results</h2>
                            {result && (
                                <p className='text-lg text-gray-700 mb-6 text-center'>
                                    {result === '1' ? `${userName} you are predicted to have PCOS` : `${userName} you are predicted to not have PCOS`}
                                </p>
                            )}
                        </>
                    ) : (
                        <>
                                <h1 className="text-3xl font-bold text-[#c84772] text-center mb-6">PCOS Prediction Form</h1>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="age" className="w-1/3 text-sm font-medium text-gray-700">Age (yrs):</label>
                                    <input type="text" id="age" name="age" value={formData.age} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="weight" className="w-1/3 text-sm font-medium text-gray-700">Weight (Kg):</label>
                                    <input type="text" id="weight" name="weight" value={formData.weight} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="height" className="w-1/3 text-sm font-medium text-gray-700">Height (Cm):</label>
                                    <input type="text" id="height" name="height" value={formData.height} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="bmi" className="w-1/3 text-sm font-medium text-gray-700">BMI:</label>
                                    <input type="text" id="bmi" name="bmi" value={formData.bmi} readOnly className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100" />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="pulseRate" className="w-1/3 text-sm font-medium text-gray-700">Pulse Rate (bpm):</label>
                                    <input type="text" id="pulseRate" name="pulseRate" value={formData.pulseRate} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="rr" className="w-1/3 text-sm font-medium text-gray-700">Respiratory Rate (breaths/min):</label>
                                    <input type="text" id="rr" name="rr" value={formData.rr} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="hb" className="w-1/3 text-sm font-medium text-gray-700">Hemoglobin (Hb, g/dl):</label>
                                    <input type="text" id="hb" name="hb" value={formData.hb} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="cycle" className="w-1/3 text-sm font-medium text-gray-700">Cycle (R/I):</label>
                                    <select id="cycle" name="cycle" value={formData.cycle} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
                                        <option value="1">Regular</option>
                                        <option value="0">Irregular</option>
                                    </select>
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="cycleLength" className="w-1/3 text-sm font-medium text-gray-700">Cycle Length (days):</label>
                                    <input type="text" id="cycleLength" name="cycleLength" value={formData.cycleLength} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="marriageStatus" className="w-1/3 text-sm font-medium text-gray-700">Marriage Status (years):</label>
                                    <input type="text" id="marriageStatus" name="marriageStatus" value={formData.marriageStatus} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="pregnant" className="w-1/3 text-sm font-medium text-gray-700">Pregnant:</label>
                                    <select id="pregnant" name="pregnant" value={formData.pregnant} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="noOfAbortions" className="w-1/3 text-sm font-medium text-gray-700">Number of Abortions:</label>
                                    <input type="text" id="noOfAbortions" name="noOfAbortions" value={formData.noOfAbortions} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="betaHcgI" className="w-1/3 text-sm font-medium text-gray-700">I beta-HCG (mIU/mL):</label>
                                    <input type="text" id="betaHcgI" name="betaHcgI" value={formData.betaHcgI} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="betaHcgII" className="w-1/3 text-sm font-medium text-gray-700">II beta-HCG (mIU/mL):</label>
                                    <input type="text" id="betaHcgII" name="betaHcgII" value={formData.betaHcgII} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="fsh" className="w-1/3 text-sm font-medium text-gray-700">FSH (mIU/mL):</label>
                                    <input type="text" id="fsh" name="fsh" value={formData.fsh} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="lh" className="w-1/3 text-sm font-medium text-gray-700">LH (mIU/mL):</label>
                                    <input type="text" id="lh" name="lh" value={formData.lh} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="fshLh" className="w-1/3 text-sm font-medium text-gray-700">FSH/LH Ratio:</label>
                                    <input type="text" id="fshLh" name="fshLh" value={formData.fshLh} readOnly className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100" />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="hip" className="w-1/3 text-sm font-medium text-gray-700">Hip (inch):</label>
                                    <input type="text" id="hip" name="hip" value={formData.hip} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="waist" className="w-1/3 text-sm font-medium text-gray-700">Waist (inch):</label>
                                    <input type="text" id="waist" name="waist" value={formData.waist} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="waistHipRatio" className="w-1/3 text-sm font-medium text-gray-700">Waist:Hip Ratio:</label>
                                    <input type="text" id="waistHipRatio" name="waistHipRatio" value={formData.waistHipRatio} readOnly className="w-2/3 p-2 border border-gray-300 rounded-md bg-gray-100" />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="tsh" className="w-1/3 text-sm font-medium text-gray-700">TSH (mIU/L):</label>
                                    <input type="text" id="tsh" name="tsh" value={formData.tsh} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="amh" className="w-1/3 text-sm font-medium text-gray-700">AMH (ng/mL):</label>
                                    <input type="text" id="amh" name="amh" value={formData.amh} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="prl" className="w-1/3 text-sm font-medium text-gray-700">PRL (ng/mL):</label>
                                    <input type="text" id="prl" name="prl" value={formData.prl} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="vitD3" className="w-1/3 text-sm font-medium text-gray-700">Vitamin D3 (ng/mL):</label>
                                    <input type="text" id="vitD3" name="vitD3" value={formData.vitD3} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="prg" className="w-1/3 text-sm font-medium text-gray-700">Progesterone (PRG, ng/mL):</label>
                                    <input type="text" id="prg" name="prg" value={formData.prg} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="rbs" className="w-1/3 text-sm font-medium text-gray-700">Random Blood Sugar (RBS, mg/dl):</label>
                                    <input type="text" id="rbs" name="rbs" value={formData.rbs} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="weightGain" className="w-1/3 text-sm font-medium text-gray-700">Weight Gain:</label>
                                    <select id="weightGain" name="weightGain" value={formData.weightGain} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="hairGrowth" className="w-1/3 text-sm font-medium text-gray-700">Hair Growth:</label>
                                    <select id="hairGrowth" name="hairGrowth" value={formData.hairGrowth} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="skinDarkening" className="w-1/3 text-sm font-medium text-gray-700">Skin Darkening:</label>
                                    <select id="skinDarkening" name="skinDarkening" value={formData.skinDarkening} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="hairLoss" className="w-1/3 text-sm font-medium text-gray-700">Hair Loss:</label>
                                    <select id="hairLoss" name="hairLoss" value={formData.hairLoss} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="pimples" className="w-1/3 text-sm font-medium text-gray-700">Pimples:</label>
                                    <select id="pimples" name="pimples" value={formData.pimples} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="fastFood" className="w-1/3 text-sm font-medium text-gray-700">Fast Food:</label>
                                    <select id="fastFood" name="fastFood" value={formData.fastFood} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="regExercise" className="w-1/3 text-sm font-medium text-gray-700">Regular Exercise:</label>
                                    <select id="regExercise" name="regExercise" value={formData.regExercise} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="bpSystolic" className="w-1/3 text-sm font-medium text-gray-700">BP Systolic (mmHg):</label>
                                    <input type="text" id="bpSystolic" name="bpSystolic" value={formData.bpSystolic} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="bpDiastolic" className="w-1/3 text-sm font-medium text-gray-700">BP Diastolic (mmHg):</label>
                                    <input type="text" id="bpDiastolic" name="bpDiastolic" value={formData.bpDiastolic} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="follicleNoL" className="w-1/3 text-sm font-medium text-gray-700">Follicle No. L:</label>
                                    <input type="text" id="follicleNoL" name="follicleNoL" value={formData.follicleNoL} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="follicleNoR" className="w-1/3 text-sm font-medium text-gray-700">Follicle No. R:</label>
                                    <input type="text" id="follicleNoR" name="follicleNoR" value={formData.follicleNoR} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="avgFSizeL" className="w-1/3 text-sm font-medium text-gray-700">Avg. Follicle Size L (mm):</label>
                                    <input type="text" id="avgFSizeL" name="avgFSizeL" value={formData.avgFSizeL} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="avgFSizeR" className="w-1/3 text-sm font-medium text-gray-700">Avg. Follicle Size R (mm):</label>
                                    <input type="text" id="avgFSizeR" name="avgFSizeR" value={formData.avgFSizeR} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>
                                <div className="flex items-center space-x-4 mb-4">
                                    <label htmlFor="endometrium" className="w-1/3 text-sm font-medium text-gray-700">Endometrium (mm):</label>
                                    <input type="text" id="endometrium" name="endometrium" value={formData.endometrium} onChange={handleInputChange} className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                                </div>
                                    <button type="submit" className="mt-4 bg-[#a93359] text-white py-2 px-4 rounded hover:bg-[#d46e8f]">Submit</button>
                            </form>
                        </>
                    )}
                    </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Prediction;