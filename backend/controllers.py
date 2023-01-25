# CONTROLLERS
from collections import defaultdict

# CONSTANTS IMPORTS
from constants import NB_QUBITS

# MODELS IMPORT
from models import compute_circuits

# OTHER IMPORTS
from utils import string_to_byte_list
from qiskit_functions import prepare_quantum_circuit

def parse_string(string):
    byte_list = string_to_byte_list(string, NB_QUBITS)

    circuits = prepare_quantum_circuit(byte_list, NB_QUBITS)

    response = compute_circuits(circuits)
    

    #===== formating data for front =====#
    parsed_string = defaultdict(int)
    for letter in response:
        for key in letter:
            parsed_string[key] += letter[key]

    categories = []
    data = []
    nb_extremities_values = int(len(parsed_string) * 0.2)

    # flattening begining
    for i in range(nb_extremities_values):
        categories.append("aestetic_value")
        data.append(0)

    # registering real values
    for key in parsed_string:
        categories.append(key)
        data.append(parsed_string[key])

    # flattening end
    for i in range(nb_extremities_values):
        categories.append("aestetic_value")
        data.append(0)

    json_parsed_string = [
        {
            "categories": categories,
            "data": data
        }
    ]

    return json_parsed_string

def parse_word(word):
    return parse_string(word)