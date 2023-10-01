import css from '../css/Statistics.module.css'

export const Statistics = ({title, stats}) => {
    return (<section className={css.statistics}>
    <h2 className="title">{title}</h2>

    <ul className={css.stat_list}>
      {stats.map((stats) => (
              <li key={stats.id} className={css.item}>
                <span className="label">{stats.label}</span>
                <span className="percentage">{stats.percentage}%</span>
              </li>
      ))}
    </ul>
  </section>);
}