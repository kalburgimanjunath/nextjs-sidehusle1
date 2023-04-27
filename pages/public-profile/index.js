import { Input } from '../../components/';
export default function index() {
  return (
    <div>
      <h4>public profile</h4>
      <div>These infos will be display in your public profile.</div>
      <div>
        <Input title="username" />
        <Input title="email" />
        <Input title="address" />
        <Input title="Upload your public picture" />
        <Input title="your name" />
        <Input title="where you are born" />
        <Input title="headline" />
        <Input title="about you" />
      </div>
      <div>RECENT POSTS</div>
    </div>
  );
}
