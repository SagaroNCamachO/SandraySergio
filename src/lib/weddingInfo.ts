import { readWeddingInfo } from '@/lib/db';
import { WeddingInfo } from '@/types';

export async function getWeddingInfo(): Promise<WeddingInfo> {
  return readWeddingInfo();
}

