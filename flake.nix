{
  description = "Proplayas flake xd";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs } @inputs:
  let 
    pkgs = import nixpkgs { system = "x86_64-linux"; config.allowUnfree = true; };
  in
  {
    devShells.x86_64-linux.default = pkgs.mkShell {
        buildInputs = [
            pkgs.typescript
            pkgs.nodejs_22
            pkgs.lazygit
        ];
    };
  };
}
