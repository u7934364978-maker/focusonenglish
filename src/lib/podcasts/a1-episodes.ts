import type { PodcastEpisode } from './types'
import { A1_EPISODES_M1 } from './a1-episodes-m1'
import { A1_EPISODES_M2 } from './a1-episodes-m2'
import { A1_EPISODES_M3 } from './a1-episodes-m3'

export const A1_EPISODES: PodcastEpisode[] = [
  ...A1_EPISODES_M1,
  ...A1_EPISODES_M2,
  ...A1_EPISODES_M3,
]
