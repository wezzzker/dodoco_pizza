import { Ingredient } from '@/app/generated/prisma-client';
import { cn } from '@/lib/utils';
import React from 'react';
import { ProductImage } from './ProductImage';
import { Title } from './Title';
import { Button } from '../ui';

interface Props {
  imageUrl:string
  name:string
  ingredients: any[]
  items?: any[]
  onClickAdd?: VoidFunction
  className?: string;
  categoryId:number
}

export const ChooseProductForm: React.FC<Props> = ({ className,imageUrl,ingredients,name,items,onClickAdd ,categoryId}) => {
  const textDetaills = '30 см, традиционное тесто 30'
  return (
    <div className={cn(className,'flex flex-1')}>
     <ProductImage imageUrl={imageUrl} size={30} productType={categoryId}/>
      <div className='w-[490px] bg-[#FCFCFC] p-7'>
        <Title text={name} size='md' className='font-extrabold mb-1'/>
        <p className='text-gray-400'>{textDetaills}</p>
        <Button className='h-[55px] px-10 text-base rounded-[18px] w-full'>
          Добавить в корзину за {'1'} ₽
        </Button>
      </div>
    </div>
  );
};