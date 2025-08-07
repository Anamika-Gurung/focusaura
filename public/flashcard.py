from transformers import pipeline

# Load the text-generation pipeline
generator = pipeline("text-generation", model="gpt2")

def generate_flashcard(prompt):
    response = generator(prompt, max_length=100, num_return_sequences=1)
    print("Flashcard Content:", response[0]["generated_text"])

# Example Usage
generate_flashcard("Explain Newton's Laws of Motion.")
