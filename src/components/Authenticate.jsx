import { useState } from "react";

// export default function Authenticate({token}) {

//     const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`   // <--- what does this mean/how does this read
//         }
//          const result = await response.json();
//             setToken(result.token);
//             console.log(result);}
//       } catch (error)
//         setError(error.message);
//   }
// }
export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}

// export default function Authenticate({ token }) {
//     const [successMessage, setSuccessMessage] = useState(null);
//     const [error, setError] = useState(null);

//     async function handleClick() {
//       try {
//         //
//       } catch (error) {
//         setError(error.message);
//       }
//     }

//     return (
//       <div>
//               <h2>Authenticate</h2>
//               {successMessage && <p>{successMessage}</p>}
//               {error && <p>{error}</p>}
//               <button onClick={handleClick}>Authenticate Token</button>

//       </div>
//     );
//   }
