const mongoose = require('mongoose');

exports.initializeDatabase = async (db) => {
    if(db !== undefined) {
        const UserSchema = new mongoose.Schema({
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
                unique: true,
            },
            DateCreated: {
                type: Date,
                required: true,
            },
        });

        const CourseSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            previewUrl: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        });

        const SectionSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            courseId: {
                type: Number,
                required: true,
            },
            orderDate: {
                type: Date,
                required: true,
            },
        });

        const PageSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            sectionId: {
                type: Number,
                required: true,
            },
            pageTypeId: {
                type: Number,
                required: true,
            },
        });

        const PurchaseSchema = new mongoose.Schema({
            userId: {
                type: Number,
                required: true,
            },
            courseId: {
                type: Number,
                required: true,
            },
            date: {
                type: Date,
                required: true,
            },
        });

        const LicenseSchema = new mongoose.Schema({
            userId: {
                type: Number,
                required: true,
            },
            purchaseId: {
                type: Number,
                required: true,
            },
            courseId: {
                type: Number,
                required: true,
            },
            isActive: {
                type: Boolean,
                required: true,
            },
        });

        const PageTypeSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
        });

        const ResourceSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
            pageId: {
                type: Number,
                required: true,
            },
        });

        const CompletionSchema = new mongoose.Schema({
            userId: {
                type: Number,
                required: true,
            },
            pageId: {
                type: Number,
                required: true,
            },
            date: {
                type: Date,
                required: true,
            },
        });

        const VideoSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
            pageId: {
                type: Number,
                required: true,
            },
            runtime: {
                type: Number,
                required: true,
            },
        });

        const VideoTimestampSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            videoId: {
                type: Number,
                required: true,
            },
            time: {
                type: Number,
                required: true,
            },
        });

        const QuizSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
        });

        const QuestionSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            quizId: {
                type: Number,
                required: true,
            },
        });

        const AnswerSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            questionId: {
                type: Number,
                required: true,
            },
            isCorrect: {
                type: Boolean,
                required: true,
            },
        });
            
        // Create collections
        const isUserCollectionEmpty = await db.collection('users').empty();
        const isCourseCollectionEmpty = await db.collection('courses').empty();
        const isSectionCollectionEmpty = await db.collection('sections').empty();
        const isPageCollectionEmpty = await db.collection('pages').empty();
        const isPurchaseCollectionEmpty = await db.collection('purchases').empty();
        const isLicenseCollectionEmpty = await db.collection('licenses').empty();
        const isPageTypeCollectionEmpty = await db.collection('pageTypes').empty();
        const isResourceCollectionEmpty = await db.collection('resources').empty();
        const isCompletionCollectionEmpty = await db.collection('completions').empty();
        const isVideoCollectionEmpty = await db.collection('videos').empty();
        const isVideoTimestampCollectionEmpty = await db.collection('videoTimestamps').empty();
        const isQuizCollectionEmpty = await db.collection('quizzes').empty();
        const isQuestionCollectionEmpty = await db.collection('questions').empty();
        const isAnswerCollectionEmpty = await db.collection('answers').empty();

        if(isUserCollectionEmpty)
            db.users.createCollection()
        if(isCourseCollectionEmpty)
            db.courses.createCollection()
        if(isSectionCollectionEmpty)
            db.sections.createCollection()
        if(isPageCollectionEmpty)
            db.pages.createCollection()
        if(isPurchaseCollectionEmpty)
            db.purchases.createCollection()
        if(isLicenseCollectionEmpty)
            db.licenses.createCollection()
        if(isPageTypeCollectionEmpty)
            db.pageTypes.createCollection()
        if(isResourceCollectionEmpty)
            db.resources.createCollection()
        if(isCompletionCollectionEmpty)
            db.completions.createCollection()
        if(isVideoCollectionEmpty)
            db.videos.createCollection()
        if(isVideoTimestampCollectionEmpty)
            db.videoTimestamps.createCollection()
        if(isQuizCollectionEmpty)
            db.quizzes.createCollection()
        if(isQuestionCollectionEmpty)
            db.questions.createCollection()
        if(isAnswerCollectionEmpty)
            db.answers.createCollection()
        
        if(isUserModelEmpty)
            mongoose.model('User', UserSchema);
        if(isCourseModelEmpty)
            mongoose.model('Course', CourseSchema);
        if(isSectionModelEmpty)
            mongoose.model('Section', SectionSchema);
        if(isPageModelEmpty)
            mongoose.model('Page', PageSchema);
        if(isPurchaseModelEmpty)
            mongoose.model('Purchase', PurchaseSchema);
        if(isLicenseModelEmpty)
            mongoose.model('License', LicenseSchema);
        if(isPageTypeModelEmpty)
            mongoose.model('PageType', PageTypeSchema);
        if(isResourceModelEmpty)
            mongoose.model('Resource', ResourceSchema);
        if(isCompletionModelEmpty)
            mongoose.model('Completion', CompletionSchema);
        if(isVideoModelEmpty)
            mongoose.model('Video', VideoSchema);
        if(isVideoTimestampModelEmpty)
            mongoose.model('VideoTimestamp', VideoTimestampSchema);
        if(isQuizModelEmpty)
            mongoose.model('Quiz', QuizSchema);
        if(isQuestionModelEmpty)
            mongoose.model('Question', QuestionSchema);
        if(isAnswerModelEmpty)
            mongoose.model('Answer', AnswerSchema);
    }
}