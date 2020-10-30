import 'reflect-metadata';
import { prop, getModelForClass } from '@typegoose/typegoose';

class Test {
  @prop()
  propA: string
}

const Model = getModelForClass(Test);