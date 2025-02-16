﻿using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Volo.Blogging.EntityFrameworkCore
{
    public class BloggingModelBuilderConfigurationOptions : ModelBuilderConfigurationOptions
    {
        public BloggingModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(tablePrefix, schema)
        {
        }
    }
}