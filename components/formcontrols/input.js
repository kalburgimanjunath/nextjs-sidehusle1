export default function Input({ label }) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input type="text" placeholder={label} className="form-control" />
    </div>
  );
}
