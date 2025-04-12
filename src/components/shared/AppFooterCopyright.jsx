function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        Designed & built with ❤️ by <strong>Thathaji Rallapalli</strong> ©{' '}
        {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default AppFooterCopyright;
