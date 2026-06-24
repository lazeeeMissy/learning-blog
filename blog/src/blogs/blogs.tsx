import style from "./blogs.module.scss";
const BlogsPage = () => {
  return (
    <div className="content-wrapper">
      <div className="header">
        <section className="back">
          <img src={backIcon} className="back-icon" />
          Back to last page
        </section>
        <h1></h1>
      </div>
    </div>
  );
};

export default BlogsPage;
