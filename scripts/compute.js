const SCRIPT_COMPUTE = [
  {
    "type": "compute",
    "stepId": "setup",
    "compute": "state.chatName = 'Compute test'\nstate.userName = '';"
  },
  {
    "type": "bot",
    "stepId": "intro",
    "text": "Welcome to your first ${chatName} chat! This very message uses a variable set in a compute block."
  },
  {
    "type": "userInput",
    "stepId": "systolicEntry",
    "id": "systolic",
    "prompt": "Enter your systolic blood pressure:"
  },
  {
    "type": "userInput",
    "stepId": "diastolicEntry",
    "id": "diastolic",
    "prompt": "Enter your diastolic blood pressure:"
  },
  {
    "type": "compute",
    "stepId": "step_5",
    "compute": "const systolic = state.systolic;\nconst diastolic = state.diastolic;\n\nstate.bloodPressure = `bp:${systolic}/${diastolic}, question:\"What AHA category does is this blood pressure?\"`;"
  },
  {
    "type": "llmBot",
    "stepId": "step_6",
    "source": "bloodPressure",
    "llmProfile": "hypertensionEducation"
  },
  {
    "type": "userInput",
    "stepId": "step_7",
    "id": "name",
    "prompt": "I never did ask your name. Could you kindly share how you prefer to be called?"
  },
  {
    "type": "bot",
    "stepId": "step_8",
    "text": "Very nice to meet you, ${name}. "
  }
]; 
