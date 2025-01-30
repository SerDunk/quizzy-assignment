export default async function GetQuiz() {
  const questions = await fetch("https://api.jsonserve.com/Uw5CrX", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return questions;
}
