// 위키미디어 커먼즈 사진. 960px로 줄여 public/photos에 저장하고, 원본과 라이선스는 source 링크에 남긴다
import type { Photo } from '../types'

// 사진을 넣을 때 쓴다: { src: base + 'dazaifu.jpg', author, license, licenseUrl, source }
// const base = import.meta.env.BASE_URL + 'photos/'

export const PHOTOS: Record<string, Photo> = {}

// 맛집 탭 사진. 키는 foodspots.json의 id
export const SPOT_PHOTOS: Record<string, Photo> = {}
