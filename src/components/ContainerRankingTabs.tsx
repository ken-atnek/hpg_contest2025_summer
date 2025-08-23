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
import { useEffect, useState } from 'react';
import { rankingData } from '@/data/rankingData';

const stages = [
  {
    id: 'first',
    label: '1',
    text: 'st',
    period: '7/1-10',
    startDate: '2025-07-01',
    endDate: '2025-07-10',
    textPeriod: '開催',
    disabled: false,
    title: 'ファーストステージ',
  },
  {
    id: 'second',
    label: '2',
    text: 'nd',
    period: '7/11-20',
    startDate: '2025-07-11',
    endDate: '2025-07-20',
    textPeriod: '開催',
    disabled: false,
    title: 'セカンドステージ',
  },
  {
    id: 'third',
    label: '3',
    text: 'rd',
    period: '7/21-31',
    startDate: '2025-07-21',
    endDate: '2025-07-31',
    textPeriod: '開催',
    disabled: false,
    title: 'サードステージ',
  },
  {
    id: 'fourth',
    label: '4',
    text: 'th',
    period: '8/1-10',
    startDate: '2025-08-01',
    endDate: '2025-08-10',
    textPeriod: '開催',
    disabled: false,
    title: 'フォースステージ',
  },
  {
    id: 'final',
    label: 'FINAL',
    period: '8/11-31',
    startDate: '2025-08-11',
    endDate: '2025-08-31',
    textPeriod: '開催',
    disabled: true,
    title: 'ファイナルステージ',
  },
];

export default function ContainerRankingTabs() {
  const [activeStage, setActiveStage] = useState('fourth');
  const items = rankingData[activeStage] ?? [];

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth !== null && windowWidth <= 480;

  const filterRanks = (min: number, max: number) =>
    items.filter((item) => item.rank >= min && item.rank <= max);

  const middleMaxRank = isMobile ? 6 : 7;
  const bottomMinRank = isMobile ? 7 : 8;
  const bottomMaxRank = isMobile ? 10 : 16;
  const underMinRank = isMobile ? 11 : 17;

  const topRankItems = filterRanks(1, 1);
  const middleRankItems = filterRanks(2, middleMaxRank);
  const bottomRankItems = filterRanks(bottomMinRank, bottomMaxRank);
  const underRankItems = filterRanks(underMinRank, 20);

  const currentStage = stages.find((stage) => stage.id === activeStage);

  return (
    <section className={styles.containerRankingTabs}>
      <h2>{currentStage?.title}</h2>
      <div className={styles.period}>
        集計期間：
        <time dateTime={currentStage?.startDate}>
          {new Date(currentStage?.startDate ?? '').toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <time dateTime={currentStage?.endDate}>
          {new Date(currentStage?.endDate ?? '').toLocaleDateString('ja-JP', {
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>
      <nav className={styles.tabs}>
        <ul>
          {stages.map((stage) => (
            <li
              key={stage.id}
              className={activeStage === stage.id ? styles.active : ''}
            >
              <button
                onClick={() => setActiveStage(stage.id)}
                disabled={stage.disabled}
                className={`${styles.button} ${stage.disabled ? styles.disabled : ''}`}
              >
                <div className={styles.wrapHead}>
                  {stage.label}
                  <span> {stage.text}</span>
                </div>
                <div className={styles.wrapFoot}>
                  <span>{stage.period}</span>
                  <i>{stage.textPeriod}</i>
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
