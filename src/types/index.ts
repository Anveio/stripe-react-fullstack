export interface RootState {
  appName: string;
  enthusiasm: EnthusiasmState;
}

export interface EnthusiasmState { 
  languageName: string; 
  level: number;
}