// ─────────────────────────────────────────────
// skills.js  –  Edit this file to update your tech stack
// Set featured: true on skills you want highlighted in the "Featured" tab
// ─────────────────────────────────────────────

export const skillCategories = [
  {
    category: "Data Science & ML",
    color: "#06b6d4",         // cyan
    skills: [
      { name: "Python",              icon: "🐍", featured: true,  badge: "Core"   },
      { name: "Scikit-learn",        icon: "🤖", featured: true,  badge: "Key"    },
      { name: "EDA",                 icon: "🔍", featured: true,  badge: "Key"    },
      { name: "Feature Engineering", icon: "⚙️",  featured: true,  badge: "Key"    },
      { name: "Classification",      icon: "🏷️",  featured: true,  badge: "ML"     },
      { name: "Regression",          icon: "📈", featured: true,  badge: "ML"     },
      { name: "Clustering",          icon: "🔵", featured: false               },
      { name: "Model Evaluation",    icon: "📋", featured: true,  badge: "Key"    },
      { name: "NumPy",               icon: "🔢", featured: false               },
      { name: "Pandas",              icon: "🐼", featured: true,  badge: "Core"   },
      { name: "Matplotlib",          icon: "📊", featured: false               },
      { name: "Seaborn",             icon: "🎨", featured: false               },
    ],
  },
  {
    category: "Deep Learning",
    color: "#a855f7",         // purple
    skills: [
      { name: "TensorFlow",   icon: "🧠", featured: true,  badge: "Hot"    },
      { name: "LSTM",         icon: "🔄", featured: true,  badge: "Hot"    },
      { name: "CNN",          icon: "🖼️",  featured: true,  badge: "Hot"    },
      { name: "NLP",          icon: "💬", featured: true,  badge: "Hot"    },
      { name: "DNN",          icon: "🕸️",  featured: false               },
      { name: "Tokenization", icon: "✂️",  featured: false               },
    ],
  },
  {
    category: "MLOps & Deployment",
    color: "#f59e0b",         // gold
    skills: [
      { name: "Databricks",           icon: "🔷", featured: true,  badge: "Hot"    },
      { name: "MLflow",               icon: "📦", featured: true,  badge: "Hot"    },
      { name: "MLflow Model Serving", icon: "🚀", featured: true,  badge: "Deploy" },
      { name: "REST API",             icon: "🌐", featured: true,  badge: "Deploy" },
      { name: "Azure",                icon: "☁️",  featured: true,  badge: "Cloud"  },
      { name: "Model Deployment",     icon: "🛠️",  featured: true,  badge: "Deploy" },
      { name: "MLOps",                icon: "♾️",  featured: true,  badge: "Hot"    },
      { name: "LightGBM",             icon: "⚡", featured: true,  badge: "ML"     },
      { name: "XGBoost",              icon: "🎯", featured: true,  badge: "ML"     },
      { name: "Model Monitoring",     icon: "📡", featured: true,  badge: "MLOps"  },
      { name: "CI/CD Pipelines",      icon: "🔁", featured: false               },
    ],
  },
  {
    category: "Programming & CS",
    color: "#ec4899",         // pink
    skills: [
      { name: "Java",        icon: "☕", featured: false },
      { name: "OOPs",        icon: "🧱", featured: false },
      { name: "Collections", icon: "📚", featured: false },
      { name: "C",           icon: "🔧", featured: false },
      { name: "C++",         icon: "⚡", featured: false },
      { name: "DSA",         icon: "🌲", featured: false },
    ],
  },
  {
    category: "Web & Tools",
    color: "#10b981",         // emerald
    skills: [
      { name: "Git",              icon: "🔀", featured: true,  badge: "Tool"  },
      { name: "GitHub",           icon: "🐙", featured: true,  badge: "Tool"  },
      { name: "Jupyter Notebook", icon: "📓", featured: true,  badge: "Tool"  },
      { name: "Tableau",          icon: "📊", featured: false              },
      { name: "HTML",             icon: "🌐", featured: false              },
      { name: "CSS",              icon: "🎨", featured: false              },
      { name: "JavaScript",       icon: "⚡", featured: false              },
      { name: "VS Code",          icon: "💻", featured: false              },
    ],
  },
];

// Featured cards (shown in the "Featured" tab) — pulled automatically from above
export const featuredSkills = skillCategories
  .flatMap((cat) =>
    cat.skills
      .filter((s) => s.featured)
      .map((s) => ({ ...s, category: cat.category, color: cat.color }))
  );
