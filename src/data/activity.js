/**
 * GitHub-style activity placeholder and language breakdown.
 * Replace contributionWeeks with real data or connect the GitHub API later.
 */

export const activitySection = {
  title: 'Contribution Activity',
  note: 'Sample contribution graph — connect GitHub API for live data',
  contributionWeeks: generateSampleContributions(),
}

export const topLanguages = [
  { name: 'JavaScript', percent: 38, color: '#f7df1e' },
  { name: 'TypeScript', percent: 25, color: '#3178c6' },
  { name: 'C#', percent: 22, color: '#239120' },
  { name: 'HTML/CSS', percent: 10, color: '#e34c26' },
  { name: 'Other', percent: 5, color: '#64748b' },
]

function generateSampleContributions() {
  const weeks = []
  for (let w = 0; w < 52; w++) {
    const days = []
    for (let d = 0; d < 7; d++) {
      const roll = Math.random()
      let level = 0
      if (roll > 0.55) level = 1
      if (roll > 0.72) level = 2
      if (roll > 0.85) level = 3
      if (roll > 0.93) level = 4
      days.push(level)
    }
    weeks.push(days)
  }
  return weeks
}
