import React from 'react'
import Skeleton from './Skeleton';

const SkeletonProduct = () => {
  return (
    <div className='skeleton-wrapper'>
        <Skeleton type="thumbnail" />
        <Skeleton type="text-lg" />
        <Skeleton type="text-md" />
        <Skeleton type="text-sm" />
        <div className='shimer-wrapper'>
            <div className='shimer'></div>
        </div>
    </div>
  )
}

export default SkeletonProduct;
