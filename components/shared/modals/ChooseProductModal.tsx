'use client'
import { Dialog } from '@/components/ui';
import { DialogContent, DialogTitle } from '@/components/ui/dialog';
import React from 'react';

import { Product } from '@/app/generated/prisma-client';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../ChooseProductForm'

interface Props {
    className?: string;
    product:Product
}

export const ChooseProductModal: React.FC<Props> = ({ className ,product}) => {
const router = useRouter()
  return (
   <Dialog open={Boolean(product)} onOpenChange={()=>router.back()}>
        <DialogContent className={"p-1 !w-[1060px] !max-w-[1060px] !min-h-[500px] bg-white overflow-hidden"}>
            <DialogTitle className='hidden'>{product.name}</DialogTitle>
            <ChooseProductForm imageUrl={product.imageUrl} ingredients={[]} name={product.name} categoryId={product.categoryId}/>
        </DialogContent>
   </Dialog>
  );    
};