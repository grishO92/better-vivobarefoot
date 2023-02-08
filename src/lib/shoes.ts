import { pb } from '@/lib/pbConfig';

export const getCarousel = async () => {
  pb.autoCancellation(false);
  const result = await pb
    .collection('carousel')
    .getFullList(3 /* batch size */, { sort: '-created' });

  return result;
};
