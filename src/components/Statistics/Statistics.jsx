import css from './Statistics.module.css'

export const Statistics = ({title, stats}) => {
    return (<section className={css.statistics}>
    {title ? <h2 className="title">{title}</h2> : ''}

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