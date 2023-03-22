import styles from "../styles/components/Breadcumb.module.scss";

export const Breadcumb: React.FunctionComponent<{ categories: string[] }> = ({
  categories,
}) => {
  const categoriesList = categories.map((category, index) => (
    <span key={`category-${index}`}>
      {index > 0 && <span className={styles.step}>&gt;</span>}
      {category}
    </span>
  ));

  return <section className={styles.categories}>{categoriesList}</section>;
};
