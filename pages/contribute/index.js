import { Input } from '../../components/';
export default function index() {
  return (
    <div>
      <header>
        <h4>Submit a Post to our community</h4>
      </header>
      <div>
        <Input label="title" />
        <Input label="short description" />
        <Input label="content goes here" />
        <Input label="tags" />
        <Input label="category" />
      </div>
      <footer>
        <button className="btn btn-primary">Submit</button>
        <button className="btn btn-default">Cancel Post</button>
      </footer>
    </div>
  );
}
