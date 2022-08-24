import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";

export default function SignUpModal() {
  const { modalState, toggleModals, signUp } = useContext(UserContext);

  console.log(signUp);

  const [validation, setValidation] = useState("");

  const inputs = useRef([]);
  const addInputs = (element) => {
    if (element && !inputs.current.includes(element)) {
      inputs.current.push(element);
    }
  };

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    //validation

    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 caractères min");
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("le mot de passe ne correspond pas");
      return;
    }

    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("");
      console.log(cred);
    } catch (err) {}
  };

  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            onClick={() => toggleModals("close")}
            className="w-100 h-100 bg-dark bg-opacity-75"
          ></div>

          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">s'inscrire</h5>
                  <button className="btn-close"></button>
                </div>
                <div className="modal-body">
                  <form
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-up-form"
                  >
                    <div className="mb-3">
                      <label htmlFor="signUpEmail">adresse e-mail</label>
                      <input
                        ref={addInputs}
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signUpPwd">Password</label>
                      <input
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="signUpPwd"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="repeatPwd">Répéter le mot de passe</label>
                      <input
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="repeatPwd"
                      />
                    </div>

                    <button className="btn btn-primary">Soumettre</button>
                    <p className="text-danger mt-1">{validation}</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
