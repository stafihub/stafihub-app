#!/bin/bash

cd packages/types && pnpm publish --no-git-checks \
&& cd ../apps-util && pnpm publish --no-git-checks \
&& cd ../apps-config && pnpm publish --no-git-checks \
&& cd ../apps-wallet && pnpm publish --no-git-checks \
&& cd ../react-components && pnpm publish --no-git-checks
