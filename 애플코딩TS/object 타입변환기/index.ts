type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type TypeChanger<MyType, T> = {
  [key in keyof MyType]: T;
};

type changeType = TypeChanger<Bus, number>;
