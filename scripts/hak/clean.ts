/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import path from "path";
import { rimraf } from "rimraf";

import { DependencyInfo } from "./dep";
import HakEnv from "./hakEnv";

export default async function clean(hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    await rimraf(moduleInfo.moduleDotHakDir);
    await rimraf(path.join(hakEnv.dotHakDir, "links", moduleInfo.name));
    await rimraf(path.join(hakEnv.projectRoot, "node_modules", moduleInfo.name));
}
