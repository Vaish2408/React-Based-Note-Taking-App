export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <p className="text-center">Copyright ©{currentYear}</p>
      </footer>
    </>
  );
}
