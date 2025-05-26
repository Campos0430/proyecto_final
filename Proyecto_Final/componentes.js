function Header() {
  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    if (selectedLanguage === "en") {
      localStorage.setItem("language", "en");
    } else {
      localStorage.setItem("language", "es");
    }
    window.location.reload();
  };

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    window.location.reload();
  };

  const currentLanguage = localStorage.getItem("language") || "es";
  const currentTheme = localStorage.getItem("theme") || "dark";

  const headerStyles =
    currentTheme === "dark"
      ? {
          backgroundColor: "#393939",
          color: "white",
        }
      : {
          backgroundColor: "#F0F0F0",
          color: "black",
        };

  const buttonStyles =
    currentTheme === "dark"
      ? {
          backgroundColor: "#2563EB",
          color: "white",
        }
      : {
          backgroundColor: "#4CAF50",
          color: "black",
        };

  const selectStyles =
    currentTheme === "dark"
      ? {
          backgroundColor: "#1E2A38",
          color: "white",
          width: "60px",
          height: "40px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }
      : {
          backgroundColor: "#DDDDDD",
          color: "black",
          width: "60px",
          height: "40px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        };

  // Sombra para ambos temas
  const shadowStyle = 
    currentTheme === "dark"
      ? "0 8px 12px rgba(0, 0, 0, 0.5)"  // Sombra más intensa para tema oscuro
      : "0 8px 12px rgba(0, 0, 0, 0.1)"; // Sombra más sutil para tema claro

  return {
    view: () =>
      m(
        "div",
        {
          style: {
            ...headerStyles,
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box",
            boxShadow: shadowStyle, // Añadiendo la sombra al header
            position: "fixed", // Esto ayuda a que la sombra se muestre correctamente
            zIndex: 10, // Asegura que el header esté por encima de otros elementos
          },
        },
        [
          m(
            "h1",
            {
              style: {
                margin: 0,
                fontSize: "35px",
                fontWeight: "bold",
                paddingLeft: "100px",
              },
            },
            currentLanguage === "es"
              ? "Sistema de Gestión de Incidencias"
              : "Incident Management System"
          ),
          m(
            "div",
            {
              style: {
                display: "flex",
                gap: "10px",
              },
            },
            [
              m(
                "select",
                {
                  style: selectStyles,
                  onchange: changeLanguage,
                  value: currentLanguage,
                },
                [
                  m("option", { value: "es" }, "🇪🇸"),
                  m("option", { value: "en" }, "🇬🇧"),
                ]
              ),
              m(
                "button",
                {
                  style: {
                    ...buttonStyles,
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                  },
                  onclick: toggleTheme,
                },
                currentTheme === "dark" ? "🌙" : "🌞"
              ),
            ]
          ),
        ]
      ),
  };
}

function Medio() {
  const currentLanguage = localStorage.getItem("language") || "es";
  const currentTheme = localStorage.getItem("theme") || "dark";

  // 👇 Funciones de redirección
  const goToLogin = () => {
    m.route.set("/login");
  };

  const goToRegister = () => {
    m.route.set("/register");
  };

  const themeStyles =
    currentTheme === "dark"
      ? {
          backgroundColor: "#0F0F1A",
          color: "white",
        }
      : {
          backgroundColor: "#FFFFFF",
          color: "black",
        };

  const cardStyles =
    currentTheme === "dark"
      ? {
          backgroundColor: "#2A2A3D",
          color: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
        }
      : {
          backgroundColor: "#F0F0F0",
          color: "black",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        };

  const textColor = currentTheme === "dark" ? "white" : "black";

  return {
    view: () =>
      m(
        "div",
        {
          style: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            backgroundColor: themeStyles.backgroundColor,
            color: themeStyles.color,
          },
        },
        m(
          "div",
          {
            style: {
              ...cardStyles,
              padding: "30px",
              borderRadius: "10px",
              maxWidth: "750px",
              width: "100%",
              marginBottom: "15px",
            },
          },
          [
            m(
              "h2",
              { style: { marginBottom: "15px", color: textColor } },
              currentLanguage === "es"
                ? "Bienvenido al Sistema de Gestión de Incidencias"
                : "Welcome to the Incident Management System"
            ),
            m(
              "p",
              { style: { marginBottom: "10px", color: textColor } },
              currentLanguage === "es"
                ? "Una plataforma para gestionar y resolver incidencias técnicas de manera eficiente."
                : "A platform to manage and resolve technical issues efficiently."
            ),
            m(
              "p",
              { style: { marginBottom: "10px", color: textColor } },
              currentLanguage === "es"
                ? "Este sistema te permite crear, gestionar y dar seguimiento a incidencias técnicas dentro de tu organización."
                : "This system allows you to create, manage, and track technical issues within your organization."
            ),
            m(
              "p",
              { style: { marginBottom: "20px", color: textColor } },
              currentLanguage === "es"
                ? "Inicia sesión para acceder a todas las funcionalidades o regístrate si aún no tienes una cuenta."
                : "Log in to access all features or sign up if you don't have an account yet."
            ),
            m(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "20px",
                },
              },
              [
                m(
                  "div",
                  {
                    style: {
                      backgroundColor:
                        currentTheme === "dark" ? "#2A2A3D" : "#AEAEAE",
                      padding: "20px",
                      borderRadius: "10px",
                      flex: "1",
                      minWidth: "200px",
                      boxShadow:
                        currentTheme === "dark"
                          ? "0px 4px 8px rgba(0, 0, 0, 0.8)"
                          : "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                  },
                  [
                    m(
                      "h3",
                      { style: { color: textColor } },
                      currentLanguage === "es"
                        ? "Crea incidencias"
                        : "Create Incidents"
                    ),
                    m(
                      "p",
                      { style: { color: textColor } },
                      currentLanguage === "es"
                        ? "Reporta problemas técnicos de forma rápida y sencilla"
                        : "Report technical issues quickly and easily"
                    ),
                  ]
                ),
                m(
                  "div",
                  {
                    style: {
                      backgroundColor:
                        currentTheme === "dark" ? "#2A2A3D" : "#AEAEAE",
                      padding: "20px",
                      borderRadius: "10px",
                      flex: "1",
                      minWidth: "200px",
                      boxShadow:
                        currentTheme === "dark"
                          ? "0px 4px 8px rgba(0, 0, 0, 0.8)"
                          : "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                  },
                  [
                    m(
                      "h3",
                      { style: { color: textColor } },
                      currentLanguage === "es" ? "Seguimiento" : "Tracking"
                    ),
                    m(
                      "p",
                      { style: { color: textColor } },
                      currentLanguage === "es"
                        ? "Monitorea el estado de tus incidencias en tiempo real"
                        : "Monitor the status of your incidents in real time"
                    ),
                  ]
                ),
                m(
                  "div",
                  {
                    style: {
                      backgroundColor:
                        currentTheme === "dark" ? "#2A2A3D" : "#AEAEAE",
                      padding: "20px",
                      borderRadius: "10px",
                      flex: "1",
                      minWidth: "200px",
                      boxShadow:
                        currentTheme === "dark"
                          ? "0px 4px 8px rgba(0, 0, 0, 0.8)"
                          : "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                  },
                  [
                    m(
                      "h3",
                      { style: { color: textColor } },
                      currentLanguage === "es"
                        ? "Resolución rápida"
                        : "Fast Resolution"
                    ),
                    m(
                      "p",
                      { style: { color: textColor } },
                      currentLanguage === "es"
                        ? "Comunicación directa para resolver problemas eficientemente"
                        : "Direct communication to resolve issues efficiently"
                    ),
                  ]
                ),
              ]
            ),
            // 🔘 Botones con redirección
            m(
              "div",
              {
                style: {
                  display: "flex",
                  gap: "10px",
                  marginTop: "20px",
                },
              },
              [
                m(
                  "button",
                  {
                    style: {
                      backgroundColor:
                        currentTheme === "dark" ? "#0645B3" : "#589BED",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    },
                    onclick: goToLogin,
                  },
                  currentLanguage === "es" ? "Iniciar sesión" : "Log in"
                ),
                m(
                  "button",
                  {
                    style: {
                      backgroundColor:
                        currentTheme === "dark" ? "#494949" : "#DCDCDF",
                      color: currentTheme === "dark" ? "white" : "black",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    },
                    onclick: goToRegister,
                  },
                  currentLanguage === "es" ? "Registrarse" : "Sign up"
                ),
              ]
            ),
          ]
        )
      ),
  };
}

function Footer() {
  const currentLanguage = localStorage.getItem("language") || "es";
  const currentTheme = localStorage.getItem("theme") || "dark";

  const footerStyles =
    currentTheme === "dark"
      ? {
          backgroundColor: "#121212",
          color: "white",
          // Se ha eliminado el boxShadow del footer
        }
      : {
          backgroundColor: "#F0F0F0",
          color: "black",
          // Se ha eliminado el boxShadow del footer
        };

  return {
    view: () =>
      m(
        "footer",
        {
          style: {
            ...footerStyles,
            textAlign: "center",
            padding: "15px 20px",
            fontSize: "14px",
          },
        },
        currentLanguage === "es"
          ? "© 2025 Sistema de Gestión de Incidencias. Todos los derechos reservados."
          : "© 2025 Incident Management System. All rights reserved."
      ),
  };
}

// Página de Login actualizada
// Modificación en la función Login para guardar el tipo de usuario en localStorage
function Login() {
  const currentLanguage = localStorage.getItem("language") || "es";
  const currentTheme = localStorage.getItem("theme") || "dark";

  const themeStyles =
    currentTheme === "dark"
      ? {
          backgroundColor: "#0F0F1A",
          color: "white",
        }
      : {
          backgroundColor: "#FFFFFF",
          color: "black",
        };

  const cardStyles =
    currentTheme === "dark"
      ? {
          backgroundColor: "#2A2A3D",
          color: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
        }
      : {
          backgroundColor: "#F0F0F0",
          color: "black",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        };

  const textColor = currentTheme === "dark" ? "white" : "black";

  const inputStyles = {
    width: "100%",
    padding: "12px",
    borderRadius: "5px",
    border: currentTheme === "dark" ? "1px solid #444" : "1px solid #ccc",
    backgroundColor: currentTheme === "dark" ? "#1E1E2D" : "white",
    color: textColor,
    boxSizing: "border-box",
  };

  const buttonStyles = {
    width: "100%",
    padding: "12px",
    backgroundColor: currentTheme === "dark" ? "#2563EB" : "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "20px",
    fontWeight: "bold",
    boxSizing: "border-box",
  };

  // Estado
  let username = "";
  let password = "";
  let errors = { username: "", password: "", credentials: "" };

  return {
    view: () =>
      m(
        "div",
        {
          style: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          },
        },
        [
          m(Header),
          m(
            "div",
            {
              style: {
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
                backgroundColor: themeStyles.backgroundColor,
                color: themeStyles.color,
              },
            },
            m(
              "div",
              {
                style: {
                  ...cardStyles,
                  padding: "40px",
                  borderRadius: "10px",
                  width: "450px",
                },
              },
              [
                m(
                  "h1",
                  {
                    style: {
                      marginBottom: "10px",
                      textAlign: "left",
                      color: textColor,
                    },
                  },
                  currentLanguage === "es" ? "Iniciar sesión" : "Log in"
                ),
                m(
                  "p",
                  { style: { marginBottom: "30px", color: textColor } },
                  currentLanguage === "es"
                    ? "Ingresa tus credenciales para acceder al sistema"
                    : "Enter your credentials to access the system"
                ),

                // Campo usuario
                m("div", { style: { marginBottom: "25px" } }, [
                  m(
                    "h2",
                    {
                      style: {
                        marginBottom: "10px",
                        fontSize: "18px",
                        color: textColor,
                      },
                    },
                    currentLanguage === "es" ? "Nombre de usuario" : "Username"
                  ),
                  m("input", {
                    type: "text",
                    placeholder:
                      currentLanguage === "es"
                        ? "Ingresa tu nombre de usuario"
                        : "Enter your username",
                    style: inputStyles,
                    value: username,
                    oninput: (e) => {
                      username = e.target.value;
                      errors.username = "";
                      errors.credentials = "";
                    },
                  }),
                  errors.username &&
                    m("p", {
                      style: { color: "red", fontSize: "14px", marginTop: "5px" },
                    }, errors.username),
                ]),

                // Campo contraseña
                m("div", { style: { marginBottom: "25px" } }, [
                  m(
                    "h2",
                    {
                      style: {
                        marginBottom: "10px",
                        fontSize: "18px",
                        color: textColor,
                      },
                    },
                    currentLanguage === "es" ? "Contraseña" : "Password"
                  ),
                  m("input", {
                    type: "password",
                    placeholder:
                      currentLanguage === "es"
                        ? "Ingresa tu contraseña"
                        : "Enter your password",
                    style: inputStyles,
                    value: password,
                    oninput: (e) => {
                      password = e.target.value;
                      errors.password = "";
                      errors.credentials = "";
                    },
                  }),
                  errors.password &&
                    m("p", {
                      style: { color: "red", fontSize: "14px", marginTop: "5px" },
                    }, errors.password),
                ]),

                // Errores de credenciales
                errors.credentials &&
                  m("p", {
                    style: { color: "red", fontSize: "14px", marginBottom: "15px" },
                  }, errors.credentials),

                // Credenciales de prueba
                m(
                  "div",
                  {
                    style: {
                      backgroundColor: currentTheme === "dark" ? "#1E1E2D" : "#F5F5F5",
                      padding: "15px",
                      borderRadius: "5px",
                      marginBottom: "25px",
                      fontSize: "14px",
                      width: "100%",
                      boxSizing: "border-box",
                      boxShadow: currentTheme === "dark"
                        ? "inset 0 2px 4px rgba(0, 0, 0, 0.5), inset 0 0 5px rgba(0, 0, 0, 0.3)"
                        : "inset 0 2px 4px rgba(0, 0, 0, 0.15), inset 0 0 5px rgba(0, 0, 0, 0.08)",
                    },
                  },
                  [
                    m(
                      "p",
                      { style: { margin: "0 0 5px 0", color: textColor } },
                      currentLanguage === "es"
                        ? "Credenciales de prueba:"
                        : "Test credentials:"
                    ),
                    m(
                      "p",
                      { style: { margin: "5px 0", color: textColor } },
                      "Admin: admin / admin123"
                    ),
                    m(
                      "p",
                      { style: { margin: "5px 0 0 0", color: textColor } },
                      currentLanguage === "es"
                        ? "Usuario: usuario / usuario123"
                        : "User: user / user123"
                    ),
                  ]
                ),

                // Botón de inicio de sesión
                m(
                  "button",
                  {
                    style: buttonStyles,
                    onclick: () => {
                      let valid = true;

                      if (!username) {
                        errors.username =
                          currentLanguage === "es"
                            ? "El nombre de usuario es obligatorio"
                            : "Username is required";
                        valid = false;
                      }

                      if (!password) {
                        errors.password =
                          currentLanguage === "es"
                            ? "La contraseña es obligatoria"
                            : "Password is required";
                        valid = false;
                      }

                      if (valid) {
                        const validUsers = [
                          { user: "admin", pass: "admin123", role: "admin" },
                          { user: "usuario", pass: "usuario123", role: "user" },
                        ];

                        const found = validUsers.find(
                          (u) => u.user === username && u.pass === password
                        );

                        if (found) {
                          // Guardar el rol del usuario en localStorage
                          localStorage.setItem("userRole", found.role);
                          
                          alert(
                            currentLanguage === "es"
                              ? "Inicio de sesión exitoso"
                              : "Login successful"
                          );
                          m.route.set("/dashboard");
                        } else {
                          errors.credentials =
                            currentLanguage === "es"
                              ? "Credenciales incorrectas"
                              : "Invalid credentials";
                        }
                      }

                      m.redraw(); // Redibuja para mostrar errores
                    },
                  },
                  currentLanguage === "es" ? "Iniciar sesión" : "Log in"
                ),

                // Enlace a registro
                m(
                  "div",
                  {
                    style: {
                      textAlign: "center",
                      marginTop: "1rem",
                      width: "100%",
                    },
                  },
                  m(
                    m.route.Link,
                    {
                      href: "/register",
                      oncreate: m.route.link,
                      style: {
                        color: currentTheme === "dark" ? "#64B5F6" : "#1565C0",
                        textDecoration: "none",
                        cursor: "pointer",
                      },
                    },
                    currentLanguage === "es"
                      ? "¿No tienes una cuenta? Regístrate"
                      : "Don't have an account? Sign up"
                  )
                ),
              ]
            )
          ),
          m(Footer),
        ]
      ),
  };
}


function Register() {
  const currentLanguage = localStorage.getItem("language") || "es";
  const currentTheme = localStorage.getItem("theme") || "dark";

  const state = {
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    errors: {},
  };

  const themeStyles = currentTheme === "dark"
    ? { backgroundColor: "#0F0F1A", color: "white" }
    : { backgroundColor: "#FFFFFF", color: "black" };

  const cardStyles = currentTheme === "dark"
    ? { backgroundColor: "#2A2A3D", color: "white" }
    : { backgroundColor: "#F0F0F0", color: "black", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" };

  const textColor = currentTheme === "dark" ? "white" : "black";

  const inputStyles = {
    width: "100%",
    padding: "12px",
    borderRadius: "5px",
    border: currentTheme === "dark" ? "1px solid #444" : "1px solid #ccc",
    backgroundColor: currentTheme === "dark" ? "#1E1E2D" : "white",
    color: textColor,
    boxSizing: "border-box",
  };

  const buttonStyles = {
    width: "100%",
    padding: "12px",
    backgroundColor: currentTheme === "dark" ? "#2563EB" : "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "20px",
    fontWeight: "bold",
    boxSizing: "border-box",
  };

  const validate = () => {
    const errors = {};
    if (!state.fullName) errors.fullName = currentLanguage === "es" ? "Este campo es obligatorio" : "This field is required";
    if (!state.email) {
      errors.email = currentLanguage === "es" ? "Este campo es obligatorio" : "This field is required";
    } else if (!state.email.includes("@")) {
      errors.email = currentLanguage === "es" ? "El correo debe contener '@'" : "Email must contain '@'";
    }
    if (!state.username) errors.username = currentLanguage === "es" ? "Este campo es obligatorio" : "This field is required";
    if (!state.password) {
      errors.password = currentLanguage === "es" ? "Este campo es obligatorio" : "This field is required";
    } else {
      if (state.password.length < 5)
        errors.password = currentLanguage === "es" ? "Debe tener al menos 5 caracteres" : "Must be at least 5 characters";
      else if (!/[A-Z]/.test(state.password))
        errors.password = currentLanguage === "es" ? "Debe contener una mayúscula" : "Must contain an uppercase letter";
      else if (!/[0-9]/.test(state.password))
        errors.password = currentLanguage === "es" ? "Debe contener un número" : "Must contain a number";
    }
    if (state.confirmPassword !== state.password)
      errors.confirmPassword = currentLanguage === "es" ? "Las contraseñas no coinciden" : "Passwords do not match";

    state.errors = errors;
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert(currentLanguage === "es" ? "Registro exitoso" : "Registration successful");
    }
  };

  return {
    view: () =>
      m("div", { style: { minHeight: "100vh", display: "flex", flexDirection: "column" } }, [
        m(Header),
        m("div", {
          style: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            backgroundColor: themeStyles.backgroundColor,
            color: themeStyles.color,
          },
        },
          m("div", {
            style: { ...cardStyles, padding: "40px", borderRadius: "10px", width: "450px" },
          }, [
            m("h1", { style: { marginBottom: "10px", textAlign: "left", color: textColor } },
              currentLanguage === "es" ? "Registrarse" : "Sign up"
            ),
            m("p", { style: { marginBottom: "30px", color: textColor } },
              currentLanguage === "es" ? "Crea una nueva cuenta de usuario" : "Create a new user account"
            ),
            ["fullName", "email", "username", "password", "confirmPassword"].map((field, i) => {
              const labels = {
                fullName: ["Nombre completo", "Full name"],
                email: ["Correo electrónico", "Email"],
                username: ["Nombre de usuario", "Username"],
                password: ["Contraseña", "Password"],
                confirmPassword: ["Confirmar contraseña", "password"]
              };
              const type = field.includes("password") ? "password" : field === "email" ? "email" : "text";
              return m("div", { style: { marginBottom: "25px" } }, [
                m("h2", { style: { marginBottom: "10px", fontSize: "18px", color: textColor } },
                  currentLanguage === "es" ? labels[field][0] : labels[field][1]
                ),
                m("input", {
                  type,
                  placeholder: currentLanguage === "es" ? `Ingresa ${labels[field][0].toLowerCase()}` : `Enter your ${labels[field][1].toLowerCase()}`,
                  style: inputStyles,
                  value: state[field],
                  oninput: (e) => (state[field] = e.target.value)
                }),
                state.errors[field] && m("p", { style: { color: "red", fontSize: "14px", margin: "5px 0 0" } }, state.errors[field])
              ]);
            }),
            m("hr", {
              style: {
                border: "none",
                height: "1px",
                backgroundColor: currentTheme === "dark" ? "#444" : "#ddd",
                margin: "0 0 20px 0",
                width: "100%",
              },
            }),
            m("button", { style: buttonStyles, onclick: handleSubmit },
              currentLanguage === "es" ? "Crear cuenta" : "Create account"
            ),
            m("div", {
              style: {
                textAlign: "center",
                marginTop: "1rem",
                width: "100%"
              }
            },
              m(m.route.Link, {
                href: "/login",
                oncreate: m.route.link,
                style: {
                  color: currentTheme === "dark" ? "#64B5F6" : "#1565C0",
                  textDecoration: "none",
                  cursor: "pointer",
                },
              }, currentLanguage === "es"
                ? "¿Ya tienes una cuenta? Inicia sesión"
                : "Already have an account? Log in")
            )
          ])
        ),
        m(Footer),
      ])
  };
}

function Dashboard() {
  const currentLanguage = localStorage.getItem("language") || "es";
  const currentTheme = localStorage.getItem("theme") || "dark";

  // Estado para las incidencias (con 3 incidencias creadas)
  let incidencias = {
    total: 3,
    pendientes: 1,
    proceso: 1,
    resueltas: 1
  };

  // Datos de las incidencias
  let incidenciasData = [
    {
      id: "INC-001",
      titulo: "Error en el sistema de login",
      descripcion: "Los usuarios no pueden acceder al sistema desde Firefox",
      estado: "Pendiente",
      tipo: "Error",
      prioridad: "Alta",
      fecha: "2025-05-10",
      asignado: "Carlos Rodríguez",
      avatar: "CR"
    },
    {
      id: "INC-002",
      titulo: "Actualización de módulo de pagos",
      descripcion: "Se requiere integrar el nuevo gateway de pagos",
      estado: "En proceso",
      tipo: "Mejora",
      prioridad: "Media",
      fecha: "2025-05-12",
      asignado: "Ana Martínez",
      avatar: "AM"
    },
    {
      id: "INC-003",
      titulo: "Reporte mensual incorrecto",
      descripcion: "El reporte de abril muestra datos inconsistentes",
      estado: "Resuelta",
      tipo: "Bug",
      prioridad: "Baja",
      fecha: "2025-05-05",
      asignado: "Miguel López",
      avatar: "ML"
    }
  ];

  // Estados para los filtros y la búsqueda
  let filtroActivo = "Todas"; // "Todas", "Pendientes", "En proceso", "Resueltas"
  let ordenActual = "Más reciente"; // "Más reciente", "Más antiguo", etc.
  let tipoActual = "Todos los tipos"; // "Todos los tipos", etc.
  let busqueda = "";

  // Estilos según el tema
  const themeStyles =
    currentTheme === "dark"
      ? {
          backgroundColor: "#0F0F1A",
          color: "white",
        }
      : {
          backgroundColor: "#FFFFFF",
          color: "black",
        };

  const cardStyles =
    currentTheme === "dark"
      ? {
          backgroundColor: "#2A2A3D",
          color: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
        }
      : {
          backgroundColor: "#F0F0F0",
          color: "black",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        };

  const textColor = currentTheme === "dark" ? "white" : "black";
  const borderColor = currentTheme === "dark" ? "#363654" : "#DDDDDD";
  const hoverColor = currentTheme === "dark" ? "#3A3A59" : "#E5E5E5";
  const activeTabColor = currentTheme === "dark" ? "#2563EB" : "#4CAF50";
  const buttonPrimaryBg = currentTheme === "dark" ? "#2563EB" : "#4CAF50";
  const buttonSecondaryBg = currentTheme === "dark" ? "#494949" : "#DCDCDF";

  // Función para filtrar las incidencias según el criterio activo
  const filtrarIncidencias = () => {
    let resultado = [...incidenciasData];
    
    // Aplicar filtro por estado
    if (filtroActivo !== "Todas") {
      const estadoFiltro = filtroActivo === "Pendientes" ? "Pendiente" : 
                          filtroActivo === "En proceso" ? "En proceso" : "Resuelta";
      resultado = resultado.filter(inc => inc.estado === estadoFiltro);
    }
    
    // Aplicar filtro por tipo
    if (tipoActual !== "Todos los tipos") {
      resultado = resultado.filter(inc => inc.tipo === tipoActual);
    }
    
    // Aplicar búsqueda
    if (busqueda.trim() !== "") {
      const terminoBusqueda = busqueda.toLowerCase();
      resultado = resultado.filter(inc => 
        inc.titulo.toLowerCase().includes(terminoBusqueda) || 
        inc.descripcion.toLowerCase().includes(terminoBusqueda) ||
        inc.id.toLowerCase().includes(terminoBusqueda)
      );
    }
    
    // Aplicar ordenamiento
    if (ordenActual === "Más reciente" || ordenActual === "Most recent") {
      resultado.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    } else if (ordenActual === "Más antiguo" || ordenActual === "Oldest") {
      resultado.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    }
    
    return resultado;
  };

  // Función para cambiar el filtro activo
  const cambiarFiltro = (filtro) => {
    filtroActivo = filtro;
    m.redraw();
  };

  // Función para manejar la búsqueda
  const manejarBusqueda = (e) => {
    busqueda = e.target.value;
    m.redraw();
  };

  // Componente para mostrar una tarjeta de estadísticas
  const EstadisticaCard = {
    view: (vnode) => 
      m(
        "div",
        {
          style: {
            ...cardStyles,
            padding: "20px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
          }
        },
        [
          m(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }
            },
            [
              m(
                "span",
                { style: { fontWeight: "500", fontSize: "14px", color: textColor } },
                vnode.attrs.titulo
              ),
              vnode.attrs.icono
                ? m(
                    "span",
                    { style: { fontSize: "20px" } },
                    vnode.attrs.icono
                  )
                : null
            ]
          ),
          m(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
              }
            },
            [
              m(
                "span",
                { style: { fontSize: "32px", fontWeight: "bold", marginBottom: "5px", color: textColor } },
                vnode.attrs.valor
              ),
              vnode.attrs.subtexto
                ? m(
                    "span",
                    { style: { fontSize: "12px", color: currentTheme === "dark" ? "#A0A0A0" : "#666666" } },
                    vnode.attrs.subtexto
                  )
                : null,
              vnode.attrs.secundario
                ? m(
                    "span",
                    { 
                      style: { 
                        fontSize: "24px", 
                        fontWeight: "bold", 
                        marginTop: "15px", 
                        color: textColor 
                      } 
                    },
                    vnode.attrs.secundario
                  )
                : null
            ]
          )
        ]
      )
  };

  // Componente para las pestañas de filtrado
  const TabSelector = {
    view: () =>
      m(
        "div",
        {
          style: {
            display: "flex",
            marginBottom: "20px",
            borderBottom: `1px solid ${borderColor}`,
          }
        },
        [
          ["Todas", "Pendientes", "En proceso", "Resueltas"].map((tab) =>
            m(
              "div",
              {
                style: {
                  padding: "10px 20px",
                  cursor: "pointer",
                  borderBottom: filtroActivo === tab ? `2px solid ${activeTabColor}` : "none",
                  fontWeight: filtroActivo === tab ? "bold" : "normal",
                  color: filtroActivo === tab ? activeTabColor : textColor,
                },
                onclick: () => cambiarFiltro(tab)
              },
              currentLanguage === "es" 
                ? tab 
                : tab === "Todas" 
                  ? "All" 
                  : tab === "Pendientes" 
                    ? "Pending" 
                    : tab === "En proceso" 
                      ? "In progress" 
                      : "Resolved"
            )
          )
        ]
      )
  };

  // Componente para la barra de búsqueda y filtros
  const SearchBar = {
    view: () =>
      m(
        "div",
        {
          style: {
            display: "flex",
            marginBottom: "20px",
            gap: "10px",
            alignItems: "center",
          }
        },
        [
          m(
            "div",
            {
              style: {
                position: "relative",
                flexGrow: 1,
              }
            },
            [
              m("input", {
                type: "text",
                placeholder: currentLanguage === "es" ? "Buscar incidencias..." : "Search incidents...",
                value: busqueda,
                oninput: manejarBusqueda,
                style: {
                  width: "100%",
                  padding: "10px 15px 10px 35px",
                  borderRadius: "5px",
                  border: currentTheme === "dark" ? "1px solid #444" : "1px solid #ccc",
                  backgroundColor: currentTheme === "dark" ? "#1E1E2D" : "white",
                  color: textColor,
                }
              }),
              m(
                "span",
                {
                  style: {
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: currentTheme === "dark" ? "#777" : "#999",
                  }
                },
                "🔍"
              )
            ]
          ),
          m(
            "div",
            {
              style: {
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }
            },
            [
              m(
                "button",
                {
                  style: {
                    padding: "10px 15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    backgroundColor: buttonSecondaryBg,
                    color: currentTheme === "dark" ? "white" : "black",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }
                },
                [
                  "🔄",
                  m(
                    "span",
                    {},
                    tipoActual === "Todos los tipos" 
                      ? (currentLanguage === "es" ? "Todos los tipos" : "All types")
                      : tipoActual
                  ),
                  "▼"
                ]
              ),
              m(
                "button",
                {
                  style: {
                    padding: "10px 15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    backgroundColor: buttonSecondaryBg,
                    color: currentTheme === "dark" ? "white" : "black",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }
                },
                [
                  "⏱️",
                  m(
                    "span",
                    {},
                    ordenActual === "Más reciente"
                      ? (currentLanguage === "es" ? "Más reciente" : "Most recent")
                      : ordenActual
                  ),
                  "▼"
                ]
              ),
              m(
                "button",
                {
                  style: {
                    padding: "10px 15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    backgroundColor: buttonSecondaryBg,
                    color: currentTheme === "dark" ? "white" : "black",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }
                },
                [
                  "⇅"
                ]
              )
            ]
          )
        ]
      )
  };

  // Componente para mostrar una incidencia
  const IncidenciaCard = {
    view: (vnode) => {
      const { incidencia } = vnode.attrs;
      
      // Color según prioridad
      const prioridadColor = 
        incidencia.prioridad === "Alta" ? "#FF5252" :
        incidencia.prioridad === "Media" ? "#FFB700" : "#4CAF50";
      
      // Color según estado
      const estadoColor = 
        incidencia.estado === "Pendiente" ? "#FF5252" :
        incidencia.estado === "En proceso" ? "#FFB700" : "#4CAF50";
      
      // Badge según tipo
      const tipoBadgeColor = 
        incidencia.tipo === "Error" ? "#FF5252" :
        incidencia.tipo === "Mejora" ? "#2563EB" : "#9C27B0";
      
      return m(
        "div",
        {
          style: {
            ...cardStyles,
            borderRadius: "8px",
            marginBottom: "15px",
            padding: "15px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            ":hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 12px rgba(0,0,0,0.15)"
            }
          }
        },
        [
          // Cabecera de la incidencia
          m(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                alignItems: "center"
              }
            },
            [
              // ID y Título
              m(
                "div",
                {},
                [
                  m(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "5px"
                      }
                    },
                    [
                      m(
                        "span",
                        {
                          style: {
                            color: currentTheme === "dark" ? "#A0A0A0" : "#666666",
                            fontSize: "12px"
                          }
                        },
                        incidencia.id
                      ),
                      m(
                        "div",
                        {
                          style: {
                            backgroundColor: tipoBadgeColor,
                            color: "white",
                            padding: "3px 8px",
                            borderRadius: "50px",
                            fontSize: "10px",
                            fontWeight: "bold"
                          }
                        },
                        incidencia.tipo
                      ),
                      m(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                            backgroundColor: prioridadColor + "20",
                            color: prioridadColor,
                            padding: "3px 8px",
                            borderRadius: "50px",
                            fontSize: "10px",
                            fontWeight: "bold"
                          }
                        },
                        [
                          "⚠️",
                          incidencia.prioridad
                        ]
                      )
                    ]
                  ),
                  m(
                    "h3",
                    {
                      style: {
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: textColor
                      }
                    },
                    incidencia.titulo
                  )
                ]
              ),
              
              // Estado
              m(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    padding: "5px 10px",
                    backgroundColor: estadoColor + "20",
                    color: estadoColor,
                    borderRadius: "50px",
                    fontSize: "12px",
                    fontWeight: "bold"
                  }
                },
                [
                  incidencia.estado === "Pendiente" ? "⏳" :
                  incidencia.estado === "En proceso" ? "🔄" : "✅",
                  " ",
                  incidencia.estado
                ]
              )
            ]
          ),
          
          // Descripción
          m(
            "p",
            {
              style: {
                fontSize: "14px",
                color: currentTheme === "dark" ? "#DDD" : "#333",
                marginBottom: "15px"
              }
            },
            incidencia.descripcion
          ),
          
          // Pie de la incidencia
          m(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "12px"
              }
            },
            [
              // Fecha
              m(
                "span",
                {
                  style: {
                    color: currentTheme === "dark" ? "#A0A0A0" : "#666666",
                  }
                },
                "📅 " + new Date(incidencia.fecha).toLocaleDateString()
              ),
              
              // Asignado
              m(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  }
                },
                [
                  m(
                    "span",
                    {
                      style: {
                        color: currentTheme === "dark" ? "#A0A0A0" : "#666666"
                      }
                    },
                    currentLanguage === "es" ? "Asignado a:" : "Assigned to:"
                  ),
                  m(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                      }
                    },
                    [
                      m(
                        "div",
                        {
                          style: {
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            backgroundColor: buttonPrimaryBg,
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "10px",
                            fontWeight: "bold"
                          }
                        },
                        incidencia.avatar
                      ),
                      incidencia.asignado
                    ]
                  )
                ]
              )
            ]
          )
        ]
      );
    }
  };

  // Componente para el mensaje de "No se encontraron incidencias"
  const NoIncidencias = {
    view: () =>
      m(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px 0",
            color: currentTheme === "dark" ? "#A0A0A0" : "#666666",
            textAlign: "center",
          }
        },
        [
          m(
            "span",
            {
              style: {
                fontSize: "50px",
                marginBottom: "20px",
              }
            },
            "📋"
          ),
          m(
            "h3",
            {
              style: {
                fontSize: "18px",
                marginBottom: "10px",
                color: textColor,
              }
            },
            currentLanguage === "es" ? "No se encontraron incidencias" : "No incidents found"
          ),
          m(
            "p",
            {},
            currentLanguage === "es" 
              ? "Crea una nueva incidencia o cambia los filtros de búsqueda" 
              : "Create a new incident or change the search filters"
          ),
          m(
            "button",
            {
              style: {
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: buttonPrimaryBg,
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              },
              onclick: () => {
                // Redirigir a la página de nueva incidencia
                // Aquí iría la lógica de redirección
              }
            },
            [
              "➕",
              currentLanguage === "es" ? "Nueva incidencia" : "New incident"
            ]
          )
        ]
      )
  };

  // Componente para mostrar la lista de incidencias o el mensaje de vacío
  const ListaIncidencias = {
    view: () => {
      const incidenciasFiltradas = filtrarIncidencias();
      
      return incidenciasFiltradas.length > 0
        ? m(
            "div",
            {},
            incidenciasFiltradas.map(inc => m(IncidenciaCard, { incidencia: inc }))
          )
        : m(NoIncidencias);
    }
  };

  // Botón para crear nueva incidencia
  const BotonNuevaIncidencia = {
    view: () =>
      m(
        "button",
        {
          style: {
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: buttonPrimaryBg,
            color: "white",
            border: "none",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            zIndex: 100
          },
          onclick: () => {
            m.route.set("/nueva-incidencia");
          }
        },
        "+"
      )
  };

  // Componente principal del Dashboard
  return {
    view: () =>
      m(
        "div",
        {
          style: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }
        },
        [
          m(Header),
          m(
            "div",
            {
              style: {
                flex: 1,
                display: "flex",
                backgroundColor: themeStyles.backgroundColor,
                color: themeStyles.color,
              }
            },
            [
              // Menú lateral (ya está incluido en el código original)
              
              // Contenido principal
              m(
                "div",
                {
                  style: {
                    flex: 1,
                    padding: "20px 30px",
                    overflowY: "auto",
                  }
                },
                [
                  // Título y subtítulo
                  m(
                    "div",
                    {
                      style: {
                        marginBottom: "30px",
                      }
                    },
                    [
                      m(
                        "h1",
                        {
                          style: {
                            fontSize: "24px",
                            fontWeight: "bold",
                            marginBottom: "5px",
                            color: textColor,
                          }
                        },
                        currentLanguage === "es" ? "Panel de control" : "Dashboard"
                      ),
                      m(
                        "p",
                        {
                          style: {
                            fontSize: "14px",
                            color: currentTheme === "dark" ? "#A0A0A0" : "#666666",
                          }
                        },
                        currentLanguage === "es" ? "Gestiona tus incidencias" : "Manage your incidents"
                      )
                    ]
                  ),
                  
                  // Tarjetas de estadísticas
                  m(
                    "div",
                    {
                      style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "20px",
                        marginBottom: "30px",
                      }
                    },
                    [
                      m(EstadisticaCard, {
                        titulo: currentLanguage === "es" ? "Total de incidencias" : "Total incidents",
                        valor: incidencias.total,
                        icono: "➕"
                      }),
                      m(EstadisticaCard, {
                        titulo: currentLanguage === "es" ? "Pendientes" : "Pending",
                        valor: incidencias.pendientes,
                        subtexto: `${Math.round((incidencias.pendientes / incidencias.total) * 100)}% ${currentLanguage === "es" ? "del total" : "of total"}`,
                        icono: "⏳"
                      }),
                      m(EstadisticaCard, {
                        titulo: currentLanguage === "es" ? "En proceso" : "In progress",
                        valor: incidencias.proceso,
                        subtexto: `${Math.round((incidencias.proceso / incidencias.total) * 100)}% ${currentLanguage === "es" ? "del total" : "of total"}`,
                        icono: "🔄"
                      }),
                      m(EstadisticaCard, {
                        titulo: currentLanguage === "es" ? "Resueltas" : "Resolved",
                        valor: incidencias.resueltas,
                        subtexto: `${Math.round((incidencias.resueltas / incidencias.total) * 100)}% ${currentLanguage === "es" ? "del total" : "of total"}`,
                        icono: "✅"
                      }),
                    ]
                  ),
                  
                  // Selector de pestañas
                  m(TabSelector),
                  
                  // Barra de búsqueda y filtros
                  m(SearchBar),
                  
                  // Lista de incidencias
                  m(ListaIncidencias),
                  
                  // Botón flotante para nueva incidencia
                  m(BotonNuevaIncidencia)
                ]
              )
            ]
          ),
          m(Footer)
        ]
      )
  };
}

// Componente para la página de Nueva Incidencia
function NuevaIncidencia() {
  const currentLanguage = localStorage.getItem("language") || "es";
  const currentTheme = localStorage.getItem("theme") || "dark";

  // Estados para el formulario
  let titulo = "";
  let descripcion = "";
  let prioridad = "Media";
  let archivos = [];

  // Estilos según el tema
  const themeStyles =
    currentTheme === "dark"
      ? {
          backgroundColor: "#0F0F1A",
          color: "white",
        }
      : {
          backgroundColor: "#FFFFFF",
          color: "black",
        };

  const cardStyles =
    currentTheme === "dark"
      ? {
          backgroundColor: "#2A2A3D",
          color: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
        }
      : {
          backgroundColor: "#F0F0F0",
          color: "black",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        };

  const textColor = currentTheme === "dark" ? "white" : "black";
  const borderColor = currentTheme === "dark" ? "#363654" : "#DDDDDD";
  const buttonPrimaryBg = currentTheme === "dark" ? "#2563EB" : "#4CAF50";
  const inputBgColor = currentTheme === "dark" ? "#1E1E2D" : "white";
  const inputBorderColor = currentTheme === "dark" ? "#444" : "#ccc";

  // Estilo común para todos los campos de entrada
  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 15px",
    borderRadius: "5px",
    border: `1px solid ${inputBorderColor}`,
    backgroundColor: inputBgColor,
    color: textColor,
    fontSize: "14px",
  };

  // Manejadores de eventos
  const handleTituloChange = (e) => {
    titulo = e.target.value;
  };

  const handleDescripcionChange = (e) => {
    descripcion = e.target.value;
  };

  const handlePrioridadChange = (e) => {
    prioridad = e.target.value;
  };

  const handleArchivosDragOver = (e) => {
    e.preventDefault();
    e.target.classList.add("dragover");
  };

  const handleArchivosDragLeave = (e) => {
    e.preventDefault();
    e.target.classList.remove("dragover");
  };

  const handleArchivosDropOrClick = (e) => {
    e.preventDefault();
    e.target.classList.remove("dragover");
    
    // Aquí iría la lógica para manejar archivos
    // Ya sea por arrastrar o por selección
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí iría la lógica para enviar el formulario
    // Por ahora, solo volvemos al dashboard
    m.route.set("/dashboard");
  };

  // Estilo común para las etiquetas
  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    color: textColor,
  };

  // Estilo común para los contenedores de campos
  const fieldContainerStyle = {
    marginBottom: "20px",
  };

  // Componente para el formulario de nueva incidencia
  return {
    view: () =>
      m(
        "div",
        {
          style: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }
        },
        [
          m(Header),
          m(
            "div",
            {
              style: {
                flex: 1,
                display: "flex",
                backgroundColor: themeStyles.backgroundColor,
                color: themeStyles.color,
              }
            },
            [
              // Menú lateral (ya está incluido en el código original)
              
              // Contenido principal
              m(
                "div",
                {
                  style: {
                    flex: 1,
                    padding: "20px 30px",
                    overflowY: "auto",
                  }
                },
                [
                  // Título y subtítulo
                  m(
                    "div",
                    {
                      style: {
                        marginBottom: "30px",
                      }
                    },
                    [
                      m(
                        "h1",
                        {
                          style: {
                            fontSize: "24px",
                            fontWeight: "bold",
                            marginBottom: "5px",
                            color: textColor,
                          }
                        },
                        "Nueva incidencia"
                      ),
                      m(
                        "p",
                        {
                          style: {
                            fontSize: "14px",
                            color: currentTheme === "dark" ? "#A0A0A0" : "#666666",
                          }
                        },
                        "Crea una nueva incidencia técnica"
                      )
                    ]
                  ),
                  
                  // Formulario
                  m(
                    "div",
                    {
                      style: {
                        ...cardStyles,
                        borderRadius: "8px",
                        padding: "20px",
                        marginBottom: "20px",
                      }
                    },
                    [
                      m(
                        "h2",
                        {
                          style: {
                            fontSize: "18px",
                            fontWeight: "bold",
                            marginBottom: "15px",
                            color: textColor,
                          }
                        },
                        "Detalles de la incidencia"
                      ),
                      m(
                        "p",
                        {
                          style: {
                            fontSize: "14px",
                            color: currentTheme === "dark" ? "#A0A0A0" : "#666666",
                            marginBottom: "20px",
                          }
                        },
                        "Completa la información de la incidencia"
                      ),
                      
                      // Formulario
                      m(
                        "form",
                        {
                          onsubmit: handleSubmit
                        },
                        [
                          // Título
                          m(
                            "div",
                            {
                              style: fieldContainerStyle
                            },
                            [
                              m(
                                "label",
                                {
                                  style: labelStyle
                                },
                                "Título"
                              ),
                              m("input", {
                                type: "text",
                                value: titulo,
                                oninput: handleTituloChange,
                                placeholder: "Ingresa un título descriptivo",
                                style: inputStyle
                              })
                            ]
                          ),
                          
                          // Descripción
                          m(
                            "div",
                            {
                              style: fieldContainerStyle
                            },
                            [
                              m(
                                "label",
                                {
                                  style: labelStyle
                                },
                                "Descripción"
                              ),
                              m("textarea", {
                                value: descripcion,
                                oninput: handleDescripcionChange,
                                placeholder: "Describe detalladamente el problema",
                                style: {
                                  ...inputStyle,
                                  minHeight: "100px",
                                  resize: "vertical",
                                }
                              })
                            ]
                          ),
                          
                          // Prioridad
                          m(
                            "div",
                            {
                              style: fieldContainerStyle
                            },
                            [
                              m(
                                "label",
                                {
                                  style: labelStyle
                                },
                                "Prioridad"
                              ),
                              m(
                                "select",
                                {
                                  value: prioridad,
                                  onchange: handlePrioridadChange,
                                  style: {
                                    ...inputStyle,
                                    width: "100%", 
                                    boxSizing: "border-box",
                                    appearance: "none",
                                    backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"%23888\" height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right 10px center",
                                  }
                                },
                                [
                                  m("option", { value: "Baja" }, "Baja"),
                                  m("option", { value: "Media" }, "Media"),
                                  m("option", { value: "Alta" }, "Alta")
                                ]
                              )
                            ]
                          ),
                          
                          // Archivos adjuntos
                          m(
                            "div",
                            {
                              style: fieldContainerStyle
                            },
                            [
                              m(
                                "label",
                                {
                                  style: labelStyle
                                },
                                "Archivos adjuntos"
                              ),
                              m(
                                "div",
                                {
                                  style: {
                                    border: `2px dashed ${inputBorderColor}`,
                                    borderRadius: "5px",
                                    padding: "20px",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    backgroundColor: inputBgColor,
                                    transition: "all 0.2s ease",
                                  },
                                  ondragover: handleArchivosDragOver,
                                  ondragleave: handleArchivosDragLeave,
                                  ondrop: handleArchivosDropOrClick,
                                  onclick: handleArchivosDropOrClick,
                                },
                                [
                                  m(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "10px",
                                      }
                                    },
                                    [
                                      m(
                                        "div",
                                        {
                                          style: {
                                            fontSize: "24px",
                                          }
                                        },
                                        "⬆️"
                                      ),
                                      m(
                                        "p",
                                        {
                                          style: {
                                            color: textColor,
                                            margin: 0,
                                          }
                                        },
                                        "Haz clic para subir o arrastra y suelta"
                                      ),
                                      m(
                                        "p",
                                        {
                                          style: {
                                            fontSize: "12px",
                                            color: currentTheme === "dark" ? "#A0A0A0" : "#666666",
                                            margin: 0,
                                          }
                                        },
                                        "PNG, JPG, PDF, DOC, XLS, TXT (máx. 5MB)"
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          
                          // Botón de envío
                          m(
                            "div",
                            {
                              style: {
                                marginTop: "30px",
                              }
                            },
                            [
                              m(
                                "button",
                                {
                                  type: "submit",
                                  style: {
                                    backgroundColor: buttonPrimaryBg,
                                    color: "white",
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                  }
                                },
                                "Crear incidencia"
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          m(Footer)
        ]
      )
  };
}



// Página de Inicio (original)
function Inicio() {
  return {
    oncreate: () => {
      window.scrollTo(0, 0);
    },
    view: () =>
      m(
        "div",
        {
          style: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          },
        },
        [m(Header), m(Medio), m(Footer)]
      ),
  };
}

// Configuración de rutas
m.route(document.body, "/", {
  "/": Inicio,
  "/login": Login,
  "/register": Register,
  "/dashboard": Dashboard,
  "/nueva-incidencia": NuevaIncidencia,
});

export { Inicio, Login, Register, Dashboard, NuevaIncidencia };









