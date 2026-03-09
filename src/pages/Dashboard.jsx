import React from "react"

const lessons = [
    { id: 1, title: "Introduction", completed: true },
    { id: 2, title: "Variables", completed: false },
    { id: 3, title: "Conditions", completed: false },
    { id: 4, title: "Loops", completed: false },
    { id: 5, title: "Functions", completed: false },
];

function Dashboard() {
    return (
        <div style={{ display: "flex", height: "100vh"}}>
            {/* Left column */}
            <div style={{
                flex: 1,
                borderRight: "1px solid #ccc",
                padding: "1rem",
                boxSizing: "border-box"
            }}
            >
                <h2>Progress</h2>
                <div style={{ margin: "1rem 0"}}>
                    <div style={{ background: "#eee", height: "10px", borderRadius: "5px", overflow: "hidden"}}>
                        <div style={{ width: "40%", background: "#4caf50", height: "10px"}}></div>
                    </div>
                    <small>40% completed</small>
                </div>

                <h2>Streak</h2>
                <p>🔥 3 days in a row</p>

                <h2>XP</h2>
                <p>120 XP</p>
            </div>

            {/* Center column */}
            <div style={{
                flex: 3,
                borderRight: "1px solid #ccc",
                padding: "1rem",
                boxSizing: "border-box"
            }}
            >
                <h2>Learning Path</h2>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "2rem" }}>
                    {lessons.map((lesson, index) => (
                        <React.Fragment key={lesson.id}>
                            {/* Circle of lesson */}
                            <div
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "50%",
                                    background: lesson.completed ? "#4caf50" : "#eee",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: lesson.completed ? "white" : "#555",
                                    fontWeight: "bold",
                                    cursor: "pointer"
                                }}
                                onClick={() => alert(`Entrando a la lección: ${lesson.title}`)}
                                >
                                {lesson.id}
                            </div>

                            {/* Line, except after last circle */}
                            {index < lessons.length - 1 && (
                                <div style={{ flex: 1, height: "4px", background: "#ccc"}}></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Right column */}
            <div style={{
                flex: 1,
                padding: "1rem",
                boxSizing: "border-box"
            }}
            >
                <h2>Actions</h2>

                <div style={{ margin: "1rem 0"}}>
                    <button style={{
                        width: "100%",
                        padding: "0.5rem",
                        marginBottom: "0.5rem",
                        background: "#2196f3",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>
                        Practice
                    </button>

                    <button style={{
                        width: "100%",
                        padding: "0.5rem",
                        marginBottom: "0.5rem",
                        background: "#ff9800",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>
                        Achievements
                    </button>

                    <button style={{
                        width: "100%",
                        padding: "0.5rem",
                        marginBottom: "0.5rem",
                        background: "#9c27b0",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>
                        Leaderboard
                    </button>
                </div>

                <h3>Tips</h3>
                <ul style={{ paddingLeft: "1rem"}}>
                    <li>Practice daily to earn streaks</li>
                    <li>Complete lessons to gain XP</li>
                    <li>Check achievements often</li>
                </ul>
            </div>
        </div>
    )
}

export default Dashboard