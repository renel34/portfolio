function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto text-center py-6 bg-[#011257]">
      <p className="text-base text-gray-400">
        Copyright © <span>{year}</span> René Laplante
      </p>
    </footer>
  );
}

export default Footer;
