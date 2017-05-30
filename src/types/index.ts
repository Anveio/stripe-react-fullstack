export interface RootState {
  enthusiasm: EnthusiasmState;
}

export interface EnthusiasmState { 
  languageName: string; 
  level: number;
}