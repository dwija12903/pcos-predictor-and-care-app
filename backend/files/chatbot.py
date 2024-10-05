import spacy
from fuzzywuzzy import fuzz
import sys 

try:
    nlp = spacy.load("en_core_web_md")
except OSError:
    print("Model 'en_core_web_md' is not installed. Install it by running 'python -m spacy download en_core_web_md'.")
    exit()

knowledge_base = {
    "What is PCOS?": "Polycystic Ovary Syndrome (PCOS) is a hormonal disorder common among women of reproductive age. It affects the ovaries, leading to irregular periods, excess androgen levels, and cysts in the ovaries.",
    "What causes PCOS?": "The exact cause of PCOS is unknown, but factors like genetics, insulin resistance, and inflammation are believed to contribute to its development.",
    "What are the common symptoms of PCOS?": "Common symptoms include irregular periods, excessive hair growth, acne, weight gain, and thinning hair on the scalp. Some women also experience ovarian cysts.",
    "How is PCOS diagnosed?": "PCOS is diagnosed through a combination of medical history, physical examination, and tests. Doctors may use blood tests to check hormone levels and an ultrasound to look for ovarian cysts.",
    "Are there specific tests for PCOS?": "Yes, tests may include blood tests for hormone levels (e.g., testosterone, luteinizing hormone, follicle-stimulating hormone) and imaging tests like ultrasound to check for cysts.",
    "What treatments are available for PCOS?": "Treatments for PCOS may include lifestyle changes (diet and exercise), medications (like birth control pills, metformin, or anti-androgens), and other therapies to manage symptoms and reduce complications.",
    "How can diet affect PCOS?": "A balanced diet can help manage symptoms by stabilizing blood sugar levels and reducing insulin resistance. Foods rich in fiber and low in refined carbohydrates are often recommended.",
    "Can exercise help with PCOS?": "Yes, regular physical activity can help manage weight, improve insulin sensitivity, and reduce symptoms associated with PCOS.",
    "How does PCOS affect fertility?": "PCOS can lead to irregular ovulation, which may make it more challenging to conceive. However, many women with PCOS can still get pregnant with appropriate treatment and lifestyle changes.",
    "What are the options for managing infertility with PCOS?": "Treatment options include medications like clomiphene citrate or letrozole, lifestyle modifications, and in some cases, assisted reproductive technologies like IVF (in vitro fertilization).",
    "What are the long-term health risks associated with PCOS?": "Women with PCOS may have an increased risk of developing type 2 diabetes, heart disease, and endometrial cancer. Regular monitoring and proactive management can help mitigate these risks.",
    "How can I reduce my risk of complications from PCOS?": "Regular exercise, a healthy diet, maintaining a healthy weight, and routine medical check-ups can help manage symptoms and reduce the risk of complications.",
    "Can PCOS affect mental health?": "Yes, women with PCOS may experience anxiety, depression, and low self-esteem due to symptoms like weight gain, acne, and hair loss. Seeking support from mental health professionals can be beneficial.",
    "Are there support groups for women with PCOS?": "Yes, many online and in-person support groups and communities exist where women with PCOS can share experiences, advice, and encouragement.",
    "Are there any natural remedies for PCOS?": "Some people find relief with natural remedies such as herbal supplements (e.g., spearmint tea, cinnamon), but it's important to discuss these options with a healthcare provider before starting any new treatment.",
    "What role do hormones play in PCOS?": "Hormones such as insulin, androgens (male hormones), and estrogen play a key role in PCOS. Imbalances in these hormones contribute to the symptoms and complications of the condition.",
    "What is the link between PCOS and diabetes?": "Many women with PCOS have insulin resistance, which can increase the risk of developing type 2 diabetes. Managing insulin levels through diet, exercise, and medication can help reduce this risk.",
    "How can I manage weight with PCOS?": "Managing weight with PCOS involves a combination of a healthy, balanced diet, regular exercise, and sometimes medical intervention. Weight loss can improve symptoms and insulin sensitivity.",
    "What medications are commonly used for PCOS?": "Common medications for PCOS include birth control pills to regulate periods, metformin to manage insulin resistance, and anti-androgens to reduce symptoms like excess hair growth.",
    "Can PCOS affect my skin?": "Yes, PCOS can cause skin issues such as acne, oily skin, and dark patches (acanthosis nigricans). Treatments may include topical or oral medications and lifestyle changes.",
    "How to take care of PCOS?": "Taking care of PCOS involves managing symptoms through lifestyle changes such as maintaining a healthy diet, engaging in regular exercise, reducing stress, and attending regular check-ups with your healthcare provider.",
    "How to manage PCOS more effectively?": "To manage PCOS more effectively, focus on maintaining a healthy weight, following a low-carb, high-fiber diet, getting regular exercise, taking prescribed medications, and regularly monitoring your symptoms with your doctor.",
    "How to improve PCOS symptoms?": "Improving symptoms of PCOS often requires a combination of weight management, a balanced diet, regular exercise, and medications like hormonal birth control or insulin-sensitizing drugs. Reducing stress and improving sleep quality can also help.",
    "How do I know if I have PCOS?": "If you experience symptoms such as irregular periods, excessive hair growth, acne, or weight gain, consult a healthcare provider. Diagnosis may involve physical exams, blood tests for hormone levels, and an ultrasound to check for ovarian cysts.",
    "How to make changes in day-to-day life with PCOS?": "Incorporating daily exercise, following a healthy diet, reducing stress, and monitoring your symptoms regularly are crucial. It may also involve managing medications and adopting a positive mental health routine.",
    "Can PCOS be cured?": "While PCOS cannot be completely cured, it can be managed effectively through lifestyle changes, medications, and regular monitoring by a healthcare provider. Treatment focuses on symptom control and reducing long-term risks."
}
def fuzzy_match(query, knowledge_base):
    query = query.lower()
    scores = [(question, fuzz.partial_ratio(query, question.lower())) for question in knowledge_base.keys()]
    best_match = max(scores, key=lambda x: x[1])
    return best_match

def find_best_match(query, knowledge_base):
    query_doc = nlp(query.lower())
    
    fuzzy_match_result = fuzzy_match(query, knowledge_base)
    fuzzy_question, fuzzy_score = fuzzy_match_result
    
    best_match = None
    highest_similarity = 0
    
    for question, answer in knowledge_base.items():
        question_doc = nlp(question.lower())
        
        if query_doc.has_vector and question_doc.has_vector:
            similarity = query_doc.similarity(question_doc)
            if similarity > highest_similarity:
                highest_similarity = similarity
                best_match = (question, answer)

    if fuzzy_score > 80 and highest_similarity > 0.7:
        return knowledge_base[fuzzy_question]
    elif highest_similarity > 0.7 and best_match:
        return best_match[1]
    elif fuzzy_score > 80:
        return knowledge_base[fuzzy_question]
    else:
        return "I'm sorry, I don't have information on that topic. Please try asking in a different way."

def chatbot_response(user_input):
    response = find_best_match(user_input, knowledge_base)
    return response

if __name__ == "__main__":
    if len(sys.argv) > 1:
        user_input = sys.argv[1]
        response = chatbot_response(user_input)
        print(response)
    else:
        print("Please provide an input for the chatbot.")