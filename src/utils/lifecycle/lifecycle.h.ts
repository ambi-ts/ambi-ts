export interface IAwake {
  awake(): void;
}
export interface IUpdate {
  update(deltaTime: number): void;
}

export interface IModified {
  _modified: boolean;
  get modified(): boolean;
  set modified(val: boolean);
}

export interface IDispose {
  dispose(): void;
}
