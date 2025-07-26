const Footer = () => {
  return (
    <footer className="bg-background border-t border-border-subtle py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          <div className="flex flex-col space-y-4">
            <div className="text-xl font-bold text-foreground">
              Vespera<span className="text-primary">®</span>
            </div>
            <div className="text-text-muted text-sm">
              Bring the night to life.
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Social</h4>
              <div className="space-y-2 text-text-muted">
                <div>Instagram</div>
                <div>Twitter</div>
                <div>LinkedIn</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">Contact</h4>
              <div className="space-y-2 text-text-muted">
                <div>Support</div>
                <div>Sales</div>
                <div>Press</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">Legal</h4>
              <div className="space-y-2 text-text-muted">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Security</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">Company</h4>
              <div className="space-y-2 text-text-muted">
                <div>About</div>
                <div>Careers</div>
                <div>Blog</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border-subtle mt-8 pt-8 text-center text-text-muted text-sm">
          © 2024 Vespera. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;