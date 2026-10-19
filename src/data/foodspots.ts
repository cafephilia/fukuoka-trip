import type { FoodSpot } from '../types'
import raw from './foodspots.json'

// SNS·유튜브에서 유명한 후쿠오카 맛집. 아직 조사 전이라 비어 있다
export const FOOD_SPOTS = raw as FoodSpot[]
