const Form = ({ errorMessage, onSubmit }) => (
  
  <form onSubmit={onSubmit}>
    
    <label>

      <input type="email" name="email" className="form-input m-2 px-2" placeholder="john@example.com" required />
    </label>
    

    <div className="whitespace-nowrap inline-flex items-center justify-center my-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
      <button type="submit">Sign Up / Login</button>
    </div>

    {errorMessage && <p className="error">{errorMessage}</p>}
     

  </form>

  
)

export default Form
