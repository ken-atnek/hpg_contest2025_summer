/* =======================================
 * 夏の陣 ランキングタブ
 * URL: src/components/ContainerRankingTabs.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-03
 * Last updated: 2025-07-04
 * ======================================= */
'use client';
import styles from '@/styles/top.module.scss';
import RankingCard from '@/components/RankingCard';
import { useState } from 'react';
import { rankingData } from '@/data/rankingData';

const stages = [
  { id: 'first', label: '1', text: 'st', textPeriod: 'ファーストステージ' },
  {
    id: 'second',
    label: '2',
    text: 'nd',
    period: '7/11-20',
    textPeriod: '開催',
  },
  {
    id: 'third',
    label: '3',
    text: 'rd',
    period: '7/21-31',
    textPeriod: '開催',
  },
  {
    id: 'fourth',
    label: '4',
    text: 'th',
    period: '8/1-10',
    textPeriod: '開催',
  },
  { id: 'final', label: 'FINAL', period: '8/11-31', textPeriod: '開催' },
];

export default function ContainerRankingTabs() {
  const [activeStage, setActiveStage] = useState('first');
  const items = rankingData[activeStage] ?? [];

  // 👇ここでまとめてフィルタ用関数を定義
  const filterRanks = (min: number, max: number) =>
    items.filter((item) => item.rank >= min && item.rank <= max);

  // 👇ここで使う
  const topRankItems = filterRanks(1, 1);
  const middleRankItems = filterRanks(2, 7);
  const bottomRankItems = filterRanks(8, 16);
  const underRankItems = filterRanks(17, 20);
  return (
    <section className={styles.containerRankingTabs}>
      <nav className={styles.tabs}>
        <ul>
          {stages.map((stage) => (
            <li
              key={stage.id}
              className={activeStage === stage.id ? styles.active : ''}
            >
              <button onClick={() => setActiveStage(stage.id)}>
                <div className={styles.wrapHead}>
                  {stage.label}
                  <span> {stage.text}</span>
                </div>
                <div className={styles.wrapFoot}>
                  <span> {stage.period}</span>
                  {stage.textPeriod}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.rankingListTop}>
        {topRankItems.map((item) => (
          <RankingCard key={item.id} item={item} />
        ))}
      </div>

      <ul className={styles.rankingListMiddle}>
        {middleRankItems.map((item) => (
          <li key={item.id}>
            <RankingCard item={item} />
          </li>
        ))}
      </ul>

      <ul className={styles.rankingListBottom}>
        {bottomRankItems.map((item) => (
          <li key={item.id}>
            <RankingCard item={item} />
          </li>
        ))}
      </ul>

      <ul className={styles.rankingListUnder}>
        {underRankItems.map((item) => (
          <li key={item.id}>
            <RankingCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
