import style from "./style.module.scss";
export default function NameWave(name: string) {
  const arr = name.split("");
  return (
    <>
      {arr.map((val, index) => (
        <span
          className={style.name}
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          {val}
        </span>
      ))}
    </>
  );
}
