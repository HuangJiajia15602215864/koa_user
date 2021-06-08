import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // 用于装饰整个类，使其变成一个数据库模型
export class User {
  @PrimaryGeneratedColumn()// 装饰主列，它的值将自动生成
  id: number;

  @Column()// 用于装饰类的某个属性，使其对应于数据库表中的一列
  name: string;

  @Column({ select: false })// 使得这个字段在查询时默认不被选中
  password: string;

  @Column()
  email: string;
}