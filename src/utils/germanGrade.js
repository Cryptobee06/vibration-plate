const GERMAN_GRADE_RANGES = [
  { min: 85, max: 100, range: "1.0-1.5", evaluationEn: "very good", evaluationDe: "sehr gut" },
  { min: 70, max: 84.99, range: "1.6-2.5", evaluationEn: "good", evaluationDe: "gut" },
  { min: 50, max: 69.99, range: "2.6-3.5", evaluationEn: "satisfactory", evaluationDe: "befriedigend" },
  { min: 30, max: 49.99, range: "3.6-4.5", evaluationEn: "sufficient", evaluationDe: "ausreichend" },
  { min: 10, max: 29.99, range: "4.6-5.5", evaluationEn: "inadequate", evaluationDe: "mangelhaft" },
  { min: 0, max: 9.99, range: "5.6-6.0", evaluationEn: "insufficient", evaluationDe: "ungenuegend" },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export const getGermanGradeInfo = (ratingOutOfFive) => {
  const rawRating = Number.parseFloat(ratingOutOfFive);
  const normalizedRating = Number.isFinite(rawRating) ? clamp(rawRating, 0, 5) : 0;
  const percent = (normalizedRating / 5) * 100;
  const grade = clamp(6 - normalizedRating, 1, 6);

  const bucket =
    GERMAN_GRADE_RANGES.find((item) => percent >= item.min && percent <= item.max) ||
    GERMAN_GRADE_RANGES[GERMAN_GRADE_RANGES.length - 1];

  return {
    grade: Number(grade.toFixed(1)),
    percent: Number(percent.toFixed(1)),
    range: bucket.range,
    evaluationEn: bucket.evaluationEn,
    evaluationDe: bucket.evaluationDe,
  };
};

export const formatGermanGrade = (ratingOutOfFive, locale = "en") => {
  const info = getGermanGradeInfo(ratingOutOfFive);
  const evaluation = locale === "de" ? info.evaluationDe : info.evaluationEn;
  return `Note ${info.grade.toFixed(1)} (${evaluation})`;
};

export const getGermanGradeBadgeClass = (ratingOutOfFive) => {
  const { evaluationEn } = getGermanGradeInfo(ratingOutOfFive);

  switch (evaluationEn) {
    case "very good":
      return "border border-emerald-300 bg-emerald-50 text-emerald-800";
    case "good":
      return "border border-blue-300 bg-blue-50 text-blue-800";
    case "satisfactory":
      return "border border-amber-300 bg-amber-50 text-amber-800";
    case "sufficient":
      return "border border-orange-300 bg-orange-50 text-orange-800";
    case "inadequate":
      return "border border-red-300 bg-red-50 text-red-800";
    default:
      return "border border-rose-300 bg-rose-50 text-rose-800";
  }
};
