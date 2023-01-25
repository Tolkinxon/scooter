import '../App.css'

export default function TakingInform() {
  return (
    <div className="taking-inform-wrapper">
      <h1>Sign Up</h1>
      <p>Get started absolutely free</p>
      <div className="taking-inform">
        <div>
          <p>Email</p>
          <input type="text" />
        </div>
        <div>
          <p>Password</p>
          <input type="password" />
        </div>

        <label htmlFor="check">
          <input type="checkbox" id="check" />
          Creating an account means you`re okay with our Terms of Service,
          Privacy Policy, and default Notification Settings
        </label>
        <br />
        <button>Sign up</button>
      </div>
    </div>
  )
}
