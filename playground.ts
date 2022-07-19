export function play() {
  const random = Math.random();
  const randomStat = random > 0.5 ? 'Hello' : [random, random];
  return typeof randomStat === 'string' ? randomStat.toUpperCase() : randomStat;
}
